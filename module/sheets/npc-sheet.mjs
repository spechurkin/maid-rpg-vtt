import {MaidActorSheet} from "./actor-sheet.mjs";

export class MaidNpcSheet extends MaidActorSheet {
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["maid-rpg", "sheet", "actor", "npc"],
            template: "systems/maid-rpg-vtt/templates/actor/npc-sheet.hbs",
            width: 620,
            height: 680
        });
    }
}
