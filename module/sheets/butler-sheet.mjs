import {MaidActorSheet} from "./maid-sheet.mjs";

export class MaidButlerSheet extends MaidActorSheet {
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["maid-rpg", "sheet", "actor", "butler"],
            template: "systems/maid-rpg-vtt/templates/actor/butler-sheet.hbs",
            width: 620,
            height: 620
        });
    }
}