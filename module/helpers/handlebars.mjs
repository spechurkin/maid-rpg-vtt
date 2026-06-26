export function registerHandlebarsHelpers() {
    Handlebars.registerHelper("maidLocalize", (key) => game.i18n.localize(key));
    Handlebars.registerHelper("maidChecked", (value) => value ? "checked" : "");
    Handlebars.registerHelper("eq", (left, right) => left === right);
    Handlebars.registerHelper("multiply", (left, right) => Number(left || 0) * Number(right || 0));
    Handlebars.registerHelper("concat", (...parts) => parts.slice(0, -1).join(""));
}
