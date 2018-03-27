class car{
    constructor(model, make, color){
        this.model = model,
        this.make = make,
        this.color = color
    }
}

var saturn = new car("2015", "Saturn", "Red");
console.log("Saturn car details:", saturn);
console.log("Saturn model:" , saturn.model, " made by", saturn.make," and its color is ", saturn.color);

var Kia = new car ("2018", "Kia", "Black");
console.log("Details of my friend car ", Kia);
console.log("Kia model is ", Kia.model, " brand ", Kia.make , " with color ", Kia.color);