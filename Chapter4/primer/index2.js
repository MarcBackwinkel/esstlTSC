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