class House {
    private foundation: string;
    private structure: string;
    private roof: string;
    private interior: string;
    
    constructor(builder: HouseBuilder) {
      this.foundation = builder.foundation;
      this.structure = builder.structure;
      this.roof = builder.roof;
      this.interior = builder.interior;
    }
    
    getFoundation(): string {
      return this.foundation;
    }
    
    getStructure(): string {
      return this.structure;
    }
    
    getRoof(): string {
      return this.roof;
    }
    
    getInterior(): string {
      return this.interior;
    }
  }
  
  class HouseBuilder {
    private _foundation: string;
    private _structure: string;
    private _roof: string;
    private _interior: string;
    
    constructor() {
      // Set default values if needed
      this._foundation = '';
      this._structure = '';
      this._roof = '';
      this._interior = '';
    }
    
    setFoundation(foundation: string): HouseBuilder {
      this._foundation = foundation;
      return this;
    }
    
    setStructure(structure: string): HouseBuilder {
      this._structure = structure;
      return this;
    }
    
    setRoof(roof: string): HouseBuilder {
      this._roof = roof;
      return this;
    }
    
    setInterior(interior: string): HouseBuilder {
      this._interior = interior;
      return this;
    }
    
    build(): House {
      return new House(this);
    }
    
    get foundation(): string {
      return this._foundation;
    }
    
    get structure(): string {
      return this._structure;
    }
    
    get roof(): string {
      return this._roof;
    }
    
    get interior(): string {
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
  
  console.log(house.getFoundation());  // Output: Concrete
  console.log(house.getStructure());   // Output: Brick
  console.log(house.getRoof());        // Output: Tile
  console.log(house.getInterior());    // Output: Modern
  