//Using JavsScript Classes
class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    toString(){
        return `toString: Name: ${this.name}, Price: ${this.price}`;
    }
}

//Using Inheritance in Classes
class TaxedProduct extends Product {
    constructor(name, price, taxRate = 1.2){
        super(name, price);
        this.taxRate = taxRate;
    }

    getPriceIncTax(){
        return Number(this.price) * this.taxRate;
    }

    toString(){
        let chainResult = super.toString();
        return `${chainResult}, Tax: ${this.getPriceIncTax()}`;
    }

    static process(...products){
        products.forEach(p => console.log(p.toString()));
    }
}

let hat = new TaxedProduct("Hat", 100);
let boots = new Product("Boots", 100);

console.log(hat.toString());
console.log(boots.toString());

TaxedProduct.process(new TaxedProduct("Hat", 100, 1.2), new TaxedProduct("Boots", 100));

//Using Iterators and Generators
function createProductIterator(){
    const hat2 = new Product("hat", 100);
    const boots2 = new Product("boots", 100);
    const umbrella2 = new Product("umbrella", 23);

    let lastVal;
    
    return {
        next(){
            switch(lastVal){
                case undefined:
                    lastVal = hat2;
                    return {value: hat2, done: false};
                case hat2:
                    lastVal = boots2;
                    return {value: boots2, done: false};
                case boots2:
                    lastVal = umbrella2;
                    return {value: umbrella2, done: false};
                case umbrella2:
                    return {value: umbrella2, done: true};
            }
        }
    }
}

let iterator = createProductIterator();
let result = iterator.next();
while (!result.done){
    console.log(result.value.toString());
    result = iterator.next();
}

//use of iterator can be awkward
//better: use a generator (function*) that is invoked once and uses "yield"-keyword
function* createProductIterator2(){
    yield new Product("Hat_gnrtr", 100);
    yield new Product("Boots_gnrtr", 100);
    yield new Product("Umbrella_gnrtr", 23);
}
[...createProductIterator2()].forEach(p => console.log(p.toString()));

//Defining Iterable Objects
class GiftPack {
    constructor(name, prod1, prod2, prod3){
        this.name = name;
        this.prod1 = prod1;
        this.prod2 = prod2;
        this.prod3 = prod3;
    }

    getTotalPrice(){
        return [this.prod1, this.prod2, this.prod3]
            .reduce((total, p) => total + p.price, 0);
    }

    /*
    *getGenerator(){
        yield this.prod1;
        yield this.prod2;
        yield this.prod3;
    }
    */
   //more elegant the *getGenerator Function can be replaced by a default iterator method
    *[Symbol.iterator](){
        yield this.prod1;
        yield this.prod2;
        yield this.prod3;
    }
}

let winter = new GiftPack("winter", new Product("Hat_Wntr", 100),
    new Product("Boots_Wntr", 100), new Product("Gloves_Wntr", 23));

console.log(`Total price: ${winter.getTotalPrice()}`);
/*
[...winter.getGenerator()].forEach(p => console.log(`Product: ${p}`));
*/
//replace the line above for the introduction of the default iterator method
//lines 100 - 104 replaced by 107 - 111
[...winter].forEach(p => console.log(`Product: ${p}`));
