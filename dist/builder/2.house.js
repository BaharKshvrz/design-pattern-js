"use strict";
class House {
    constructor(builder) {
        this.foundation = builder.foundation;
        this.structure = builder.structure;
        this.roof = builder.roof;
        this.interior = builder.interior;
    }
    getFoundation() {
        return this.foundation;
    }
    getStructure() {
        return this.structure;
    }
    getRoof() {
        return this.roof;
    }
    getInterior() {
        return this.interior;
    }
}
class HouseBuilder {
    constructor() {
        // Set default values if needed
        this._foundation = '';
        this._structure = '';
        this._roof = '';
        this._interior = '';
    }
    setFoundation(foundation) {
        this._foundation = foundation;
        return this;
    }
    setStructure(structure) {
        this._structure = structure;
        return this;
    }
    setRoof(roof) {
        this._roof = roof;
        return this;
    }
    setInterior(interior) {
        this._interior = interior;
        return this;
    }
    build() {
        return new House(this);
    }
    get foundation() {
        return this._foundation;
    }
    get structure() {
        return this._structure;
    }
    get roof() {
        return this._roof;
    }
    get interior() {
        return this._interior;
    }
}
// Usage example:
const house = new HouseBuilder()
    .setFoundation('Concrete')
    .setStructure('Brick')
    .setRoof('Tile')
    .setInterior('Modern')
    .build();
console.log(house.getFoundation()); // Output: Concrete
console.log(house.getStructure()); // Output: Brick
console.log(house.getRoof()); // Output: Tile
console.log(house.getInterior()); // Output: Modern
