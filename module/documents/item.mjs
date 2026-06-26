export class MaidItem extends Item {
    prepareDerivedData() {
        super.prepareDerivedData();
        if (this.type === "weapon") {
            this.system.attackLabel = `${this.system.attribute ?? "athletics"} + ${this.system.damage ?? 0}`;
        }
    }
}