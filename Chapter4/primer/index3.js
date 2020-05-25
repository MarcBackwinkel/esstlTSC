//Using Javascript Collections
class Product {
    constructor(name, price){
        //a symbol value is created for each object
        //symbol values are not human readable
        //benefit of using symbols as keys is that there is no possibilty of two keys colliding
        this.id = Symbol();
        this.name = name;
        this.price = price;
    }

    toString(){
        return `toString: Name: ${this.name}, Price: ${this.price}`;
    }
}

let data = {
    hat: new Product("Hat", 100)
}

data.boots = new Product("Boots", 100);

//Object.keys(object) returns an array containing the property names defined by the object
Object.keys(data).forEach(key => console.log(data[key].toString()));
//Object.value(object) returns an array containing the property values defined by the object
Object.values(data).forEach(value => console.log(value.toString()));

//Upper example used an Object to store a Map, which is a bit limited
//JS also provides "Map", which is purpose-built for storing data using keys

let dataMap = new Map();
dataMap.set("hat", new Product("Hat_map", 100));
dataMap.set("Boots", new Product("Boots_map", 100));

[...dataMap.keys()].forEach(key => console.log(dataMap.get(key).toString()));

//Using Symbols for Map Keys
//added this.id = Symbol() in line 4
class supplier {
    constructor(name, productIDs){
        this.name = name;
        this.productIDs = productIDs;
    }
}

let acmeProducts = [new Product("Hat", 100), new Product("Boots", 100)];
let zoomProducts = [new Product("Hat", 100), new Product("Boots", 100)];

let products = new Map();
//                                              products.set(key, value)
[...acmeProducts, ...zoomProducts].forEach(p => products.set(p.id, p));
let suppliers = new Map();
//acmeProducts.map(p => p.id) returns a new array containing only the IDs
suppliers.set("acme", new supplier("Acme Co", acmeProducts.map(p => p.id)));
suppliers.set("zoom", new supplier("Zoom Shoes", zoomProducts.map(p => p.id)));

suppliers.get("acme").productIDs.forEach(id => 
    console.log(`Name: ${products.get(id).name}`));

//Storing Data by Index
let product = new Product("Hat", 100);

let productArray = [];
let productSet = new Set();

for (let i = 0; i < 5; i++){
    productArray.push(product);
    productSet.add(product);
}

//Same product is added five times to an Array and to a Set
//result: Array contains 5 (identical) products, Set contains just one product (no duplicates)

console.log(`Array length: ${productArray.length}`);
console.log(`Set size: ${productSet.size}`);