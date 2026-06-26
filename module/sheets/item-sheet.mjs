export class MaidItemSheet extends foundry.appv1.sheets.ItemSheet {
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["maid-rpg", "sheet", "item"],
            template: "systems/maid-rpg-vtt/templates/item/item-sheet.hbs",
            width: 720,
            height: 640
        });
    }

    async getData(options) {
        const context = await super.getData(options);
        context.config = CONFIG.MAID_RPG;
        context.system = this.item.system;
        const enrichOptions = {async: true, secrets: this.item.isOwner};
        context.enrichedDescription = await TextEditor.enrichHTML(this.item.system.description ?? "", enrichOptions);
        context.enrichedRestrictions = await TextEditor.enrichHTML(this.item.system.restrictions ?? "", enrichOptions);
        context.enrichedBenefits = await TextEditor.enrichHTML(this.item.system.benefits ?? "", enrichOptions);
        return context;
    }
}
