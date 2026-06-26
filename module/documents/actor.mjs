export class MaidActor extends Actor {
    async _preCreate(data, options, user) {
        await super._preCreate(data, options, user);
        const disposition = this.type === "npc"
            ? CONST.TOKEN_DISPOSITIONS.NEUTRAL
            : CONST.TOKEN_DISPOSITIONS.FRIENDLY;
        this.updateSource({
            prototypeToken: {
                actorLink: true,
                disposition,
                displayName: CONST.TOKEN_DISPLAY_MODES.OWNER_HOVER,
                displayBars: CONST.TOKEN_DISPLAY_MODES.OWNER_HOVER,
                bar1: {attribute: "resolve"},
                bar2: {attribute: "stress"}
            }
        });
    }

    prepareDerivedData() {
        super.prepareDerivedData();
        const system = this.system;
        if (!system?.attributes) return;
        const attributes = system.attributes ?? {};
        const modifiers = this.type === "master"
            ? this.constructor.getManualAttributeMods(system.attributeMods)
            : this.type === "butler"
                ? this.constructor.calculateButlerTypeAttributeMods(system.butlerTypes, system.veteranBonusAttribute)
                : this.constructor.calculateTypeAttributeMods(system.maidTypes, CONFIG.MAID_RPG.maidTypeAttributeMods);
        system.attributeMods = modifiers;
        system.attributeTotals = Object.fromEntries(
            Object.entries(attributes).map(([key, value]) => [
                key,
                this.constructor.clampAttributeValue(Number(value || 0) + Number(modifiers[key] || 0))
            ])
        );
        system.attributeTotal = Object.values(system.attributeTotals).reduce((sum, value) => sum + Number(value || 0), 0);
    }

    async _preUpdate(changed, options, user) {
        await super._preUpdate(changed, options, user);
        const attributes = changed.system?.attributes;
        if (attributes) {
            for (const [key, value] of Object.entries(attributes)) {
                attributes[key] = this.constructor.clampAttributeValue(value);
            }
        }

        for (const [key, value] of Object.entries(changed)) {
            if (key.startsWith("system.attributes.")) {
                changed[key] = this.constructor.clampAttributeValue(value);
            }
        }
    }

    static clampAttributeValue(value) {
        return Math.max(0, Number(value || 0));
    }

    static getManualAttributeMods(attributeMods = {}) {
        const attributeKeys = Object.keys(CONFIG.MAID_RPG.attributes ?? {});
        return Object.fromEntries(attributeKeys.map((key) => [key, Number(attributeMods?.[key] || 0)]));
    }

    static calculateTypeAttributeMods(selected = [], modifierConfig = {}) {
        const attributeKeys = Object.keys(CONFIG.MAID_RPG.attributes ?? {});
        const modifiers = Object.fromEntries(attributeKeys.map((key) => [key, 0]));
        const selectedTypes = Array.isArray(selected)
            ? selected
            : Object.values(selected ?? {});

        for (const type of selectedTypes) {
            const typeModifiers = modifierConfig?.[type] ?? {};
            for (const [key, value] of Object.entries(typeModifiers)) {
                if (key === "any") continue;
                modifiers[key] = Number(modifiers[key] || 0) + Number(value || 0);
            }
        }
        return modifiers;
    }

    static calculateButlerTypeAttributeMods(butlerTypes = [], veteranBonusAttribute = "") {
        const modifiers = this.calculateTypeAttributeMods(butlerTypes, CONFIG.MAID_RPG.butlerTypeAttributeMods);
        const selectedTypes = Array.isArray(butlerTypes)
            ? butlerTypes
            : Object.values(butlerTypes ?? {});
        const veteranCount = selectedTypes.filter((type) => type === "veteran").length;

        if (veteranCount > 0 && Object.hasOwn(CONFIG.MAID_RPG.attributes ?? {}, veteranBonusAttribute)) {
            modifiers[veteranBonusAttribute] = Number(modifiers[veteranBonusAttribute] || 0) + veteranCount;
        }

        return modifiers;
    }

    async rollAttribute(attributeKey) {
        const value = this.constructor.clampAttributeValue(
            this.system.attributeTotals?.[attributeKey] ?? this.system.attributes?.[attributeKey] ?? 0
        );
        const label = game.i18n.localize(CONFIG.MAID_RPG.attributes[attributeKey] ?? attributeKey);

        const roll = await new Roll("@value * 1d6", {value}).evaluate();
        await roll.toMessage({
            speaker: ChatMessage.getSpeaker({actor: this}),
            flavor: game.i18n.format("MAID_RPG.RollAttribute", {name: this.name, attribute: label})
        });
        return roll;
    }

    async rollDice(formula) {
        const roll = await new Roll(formula).evaluate();
        await roll.toMessage({
            speaker: ChatMessage.getSpeaker({actor: this}),
            flavor: game.i18n.format("MAID_RPG.RollDice", {name: this.name, formula})
        });
        return roll;
    }
}
