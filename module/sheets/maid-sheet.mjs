export class MaidActorSheet extends foundry.appv1.sheets.ActorSheet {
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["maid-rpg", "sheet", "actor"],
            template: "systems/maid-rpg-vtt/templates/actor/maid-sheet.hbs",
            width: 620,
            height: 680,
            tabs: [{navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "main"}],
            dragDrop: [{dragSelector: ".inventory-item", dropSelector: ".maid-character-sheet"}]
        });
    }

    async getData(options) {
        const context = await super.getData(options);
        context.config = CONFIG.MAID_RPG;
        context.system = this.actor.system;
        context.inventoryItems = this._prepareInventoryItems();
        context.hasInventoryItems = context.inventoryItems.length > 0;
        const enrichOptions = {async: true, secrets: this.actor.isOwner};
        context.enrichedDescription = await TextEditor.enrichHTML(this.actor.system.description ?? "", enrichOptions);
        context.enrichedNotes = await TextEditor.enrichHTML(this.actor.system.notes ?? "", enrichOptions);
        return context;
    }

    activateListeners(html) {
        super.activateListeners(html);
        html.find("[data-item-action]").on("click", this._onInventoryItemAction.bind(this));
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

    _prepareInventoryItems() {
        if (this.actor.type === "npc") return [];
        return this.actor.items.contents.map((item) => {
            const typeLabel = game.i18n.localize(CONFIG.MAID_RPG.itemTypes[item.type] ?? item.type);
            const details = this._prepareInventoryItemDetails(item);
            return {
                details,
                id: item.id,
                img: item.img,
                name: item.name,
                subtitle: item.type === "item" && item.system.itemType ? item.system.itemType : typeLabel,
                type: item.type,
                typeLabel
            };
        });
    }

    _prepareInventoryItemDetails(item) {
        if (item.type !== "uniform") return "";
        const details = [];
        if (item.system.cost !== undefined && item.system.cost !== "") {
            details.push(`${game.i18n.localize("MAID_RPG.Item.Cost")}: ${item.system.cost}`);
        }
        if (item.system.requirements) {
            details.push(`${game.i18n.localize("MAID_RPG.Item.Requirements")}: ${item.system.requirements}`);
        }
        return details.join(" / ");
    }

    async _onInventoryItemAction(event) {
        event.preventDefault();
        const action = event.currentTarget.dataset.itemAction;

        if (!this.isEditable && ["create", "delete"].includes(action)) return null;

        if (action === "create") {
            return this._createInventoryItem(event.currentTarget.dataset.itemType);
        }

        const item = this._getInventoryItem(event.currentTarget);
        if (!item) return null;

        if (action === "edit") {
            item.sheet.render(true);
            return item;
        }

        if (action === "delete") {
            const confirmed = await Dialog.confirm({
                title: game.i18n.localize("MAID_RPG.Item.DeleteTitle"),
                content: game.i18n.format("MAID_RPG.Item.DeleteConfirm", {name: item.name}),
                defaultYes: false
            });
            if (confirmed) await item.delete();
        }

        return item;
    }

    async _createInventoryItem(type = "item") {
        const [item] = await this.actor.createEmbeddedDocuments("Item", [{
            img: "icons/svg/item-bag.svg",
            name: game.i18n.localize("MAID_RPG.Item.NewCustomItem"),
            type
        }]);
        item?.sheet.render(true);
        return item;
    }

    _getInventoryItem(element) {
        const row = element.closest("[data-item-id]");
        return row ? this.actor.items.get(row.dataset.itemId) : null;
    }

    async _onDropItem(event, data) {
        if (this.actor.type === "npc" || !this.isEditable) return false;
        const created = await super._onDropItem(event, data);
        this._activateInventoryTab();
        return created;
    }

    _activateInventoryTab() {
        const tab = this._tabs?.[0];
        if (tab) tab.activate("inventory");
    }
}
