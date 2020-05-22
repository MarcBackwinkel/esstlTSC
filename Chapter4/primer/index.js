let ProductProto = {
    toString: function(){
        return `toString: Name: ${this.name}, Price: ${this.price}`;
    }
}

let hat = {
    name: "Hat",
    price: 100,
    getPriceIncTax(){
        return Number(this.price) * 1.2;
    }
};

let boots = {
    name: "Boots",
    price: 100,
    getPriceIncTax(){
        return Number(this.price) * 1.2;
    }
}

Object.setPrototypeOf(hat, ProductProto);
Object.setPrototypeOf(boots, ProductProto);


let hatPrototype = Object.getPrototypeOf(hat);
/*hatPrototype.toString = function(){
    return `toString: Name: ${this.name}, Price: ${this.price}`;
}
*/
console.log(hat.toString());
console.log(boots.toString());

console.log(`Hat Prototype: ${hat}`);
/*
let bootsPrototype = Object.getPrototypeOf(boots);
console.log(`Boots Prototype: ${bootsPrototype}`);

console.log(`Common prototype: ${hatPrototype === bootsPrototype}`);

console.log(`Hat: ${hat.price}, ${hat.getPriceIncTax()}`);
console.log(`toString: ${hat.toString()}`);
*/