import {MaidActor, MaidItem} from "./documents/_module.mjs";
import {MaidActorSheet} from "./sheets/maid-sheet.mjs";
import {MaidButlerSheet} from "./sheets/butler-sheet.mjs";
import {MaidMasterSheet} from "./sheets/master-sheet.mjs";
import {MaidNpcSheet} from "./sheets/npc-sheet.mjs";
import {MaidItemSheet} from "./sheets/item-sheet.mjs";
import {MAID_RPG} from "./helpers/config.mjs";
import {preloadHandlebarsTemplates} from "./helpers/templates.mjs";
import {registerHandlebarsHelpers} from "./helpers/handlebars.mjs";

Hooks.once("init", async () => {
    CONFIG.MAID_RPG = MAID_RPG;
    game.maidRpg = {MaidActor, MaidItem, config: MAID_RPG};

    CONFIG.Actor.documentClass = MaidActor;
    CONFIG.Item.documentClass = MaidItem;

    foundry.documents.collections.Actors.unregisterSheet("core", foundry.appv1.sheets.ActorSheet);
    foundry.documents.collections.Actors.registerSheet(MAID_RPG.id, MaidActorSheet, {
        types: ["maid"], makeDefault: true
    });
    foundry.documents.collections.Actors.registerSheet(MAID_RPG.id, MaidNpcSheet, {
        types: ["npc"], makeDefault: true, label: "TYPES.Actor.npc"
    });
    foundry.documents.collections.Actors.registerSheet(MAID_RPG.id, MaidButlerSheet, {
        types: ["butler"], makeDefault: true, label: "TYPES.Actor.butler"
    });
    foundry.documents.collections.Actors.registerSheet(MAID_RPG.id, MaidMasterSheet, {
        types: ["master"], makeDefault: true, label: "TYPES.Actor.master"
    });

    foundry.documents.collections.Items.unregisterSheet("core", foundry.appv1.sheets.ItemSheet);
    foundry.documents.collections.Items.registerSheet(MAID_RPG.id, MaidItemSheet, {
        types: Object.keys(MAID_RPG.itemTypes), makeDefault: true
    });

    registerHandlebarsHelpers();
    await preloadHandlebarsTemplates();
});
