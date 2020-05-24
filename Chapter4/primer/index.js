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

//Using Contructor Functions
let Product = function(name, price){
    this.name = name;
    this.price = price;
}

Product.prototype.toString = function(){
    return `toString: Name: ${this.name}, Price: ${this.price}`;
}

let hat2 = new Product("Hat", 100);
let boots2 = new Product("boots", 100);

console.log(hat2.toString());
console.log(boots2.toString());

//Chaining Constructor Functions

let TaxedProduct = function(name, price, taxRate){
    //call the Product constructor function on this object --> via call-Method
    Product.call(this, name, price);
    this.taxRate = taxRate;
}
//Set Product.prototype also as Prototype of TaxedProduct.Prototype
/* Chaining order
    hat3<----TaxedProduct<---
                            |----Product<----Object
    boots3<------------------
*/
Object.setPrototypeOf(TaxedProduct.prototype, Product.prototype);

TaxedProduct.prototype.getPriceIncTax = function(){
    return Number(this.price) * this.taxRate;
}

TaxedProduct.prototype.toTaxString = function(){
    return `${this.toString()}, Tax: ${this.getPriceIncTax()}`;
}

let hat3 = new TaxedProduct("Hat", 100, 1.2);
let boots3 = new Product("Boots", 100);

console.log(hat3.toTaxString());
console.log(boots3.toString());

//Checking Prototype Types
console.log(`hat3 and TaxedProduct: ${hat3 instanceof TaxedProduct}`);
console.log(`hat3 and Product: ${hat3 instanceof Product}`);
console.log(`boots3 and TaxedProduct: ${boots3 instanceof TaxedProduct}`);
console.log(`boots3 and Product: ${boots3 instanceof Product}`);

//Defining Static Properties and Methods
Product.process = (...products) =>
    products.forEach(p => console.log(p.toString()));

Product.process(new Product("Hat", 100, 1.2), new Product("Boots", 100));