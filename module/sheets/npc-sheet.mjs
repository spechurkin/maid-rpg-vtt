import {MaidActorSheet} from "./maid-sheet.mjs";

export class MaidNpcSheet extends MaidActorSheet {
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["maid-rpg", "sheet", "actor", "npc"],
            template: "systems/maid-rpg-vtt/templates/actor/npc-sheet.hbs",
            width: 620,
            height: 680
        });
    }

    async getData(options) {
        const context = await super.getData(options);
        const enrichOptions = {async: true, secrets: this.actor.isOwner};
        context.enrichedAbilities = await TextEditor.enrichHTML(this.actor.system.abilities ?? "", enrichOptions);
        return context;
    }
}
