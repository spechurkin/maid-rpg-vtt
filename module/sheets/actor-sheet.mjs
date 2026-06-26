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
