export class MaidActorSheet extends foundry.appv1.sheets.ActorSheet {
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["maid-rpg", "sheet", "actor"],
            template: "systems/maid-rpg-vtt/templates/actor/maid-sheet.hbs",
            width: 620,
            height: 680,
            tabs: [{navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "main"}]
        });
    }

    async getData(options) {
        const context = await super.getData(options);
        context.config = CONFIG.MAID_RPG;
        context.system = this.actor.system;

        const enrichOptions = {async: true, secrets: this.actor.isOwner};
        const enrichText = (value) => TextEditor.enrichHTML(value ?? "", enrichOptions);
        const enrichTextArray = (values = []) => Promise.all(values.map((value) => enrichText(value)));

        context.enrichedRootDescription = await enrichText(this.actor.system.rootDescription);
        context.enrichedStressExplosionDescription = await enrichText(this.actor.system.stressExplosionDescription);
        context.enrichedMaidPowerDescription = await enrichText(this.actor.system.maidPowerDescription);
        context.enrichedSpecialQualityDescriptions = await enrichTextArray(this.actor.system.specialQualityDescriptions);
        context.enrichedStressNotes = await enrichText(this.actor.system.stressNotes);
        context.enrichedMaidWeapons = await enrichText(this.actor.system.maidWeapons);
        context.enrichedFavorNotes = await enrichText(this.actor.system.favorNotes);
        context.enrichedTrauma = await enrichText(this.actor.system.trauma);
        context.enrichedSeduction = await enrichText(this.actor.system.seduction);
        context.enrichedDescription = await enrichText(this.actor.system.description);
        context.enrichedNotes = await enrichText(this.actor.system.notes);
        context.enrichedButlerPowerDescriptions = await enrichTextArray(this.actor.system.butlerPowerDescriptions);
        context.enrichedPowerSourceDescriptions = await enrichTextArray(this.actor.system.powerSourceDescriptions);
        context.enrichedMansion = await enrichText(this.actor.system.mansion);
        context.enrichedEncounterTable = await enrichText(this.actor.system.encounterTable);
        return context;
    }

    activateListeners(html) {
        super.activateListeners(html);
        if (!this.isEditable) return;
        html.find("[data-roll-attribute]").on("click", (event) => {
            event.preventDefault();
            this.actor.rollAttribute(event.currentTarget.dataset.rollAttribute);
        });
        html.find("[data-roll-formula]").on("click", (event) => {
            event.preventDefault();
            this.actor.rollDice(event.currentTarget.dataset.rollFormula);
        });
    }
}
