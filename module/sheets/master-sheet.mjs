import {MaidActorSheet} from "./maid-sheet.mjs";

export class MaidMasterSheet extends MaidActorSheet {
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["maid-rpg", "sheet", "actor", "master"],
            template: "systems/maid-rpg-vtt/templates/actor/master-sheet.hbs",
            width: 620,
            height: 620
        });
    }
}