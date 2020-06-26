function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number){
    console.log(`Price for ${product}: ${price.toFixed(2)}€`);
}

let prices: number[] = [100, 75, 42]
let names: string[] = ["hat", "gloves", "umbrella", "Sunglasses"];

prices.forEach((price: number, index: number) => {
    writePrice(names[index], calculateTax(price));
})

//compiler will infer the type "any" for empty arrays
//to prevent the type "any" being inferred, strictNullChecks has to be enabled; then the type "never" will be inferred
let pricesAny = [];

//Javascript will coerce "20" to number 20, so the operation will succeed
pricesAny.push(...[100, 72, 42, "20"]);
pricesAny.forEach((price: number, index: number) => {
    writePrice(names[index], calculateTax(price));
})



//TUPLES
//tuples are fixed-length arrays, where each element can have a different type
//tuples must contain type annotations, else Typescript assumes an array like [string | number]
//tuples will be arrays in Javascript
let hatTuple: [string, number] = ["Hat", 100];
let glovesTuple: [string, number] = ["Gloves", 75];

writePrice(hatTuple[0], hatTuple[1]);
writePrice(glovesTuple[0], glovesTuple[1]);

//Processing tuples
hatTuple.forEach((h: string | number) => {
    if (typeof h === "string"){
        console.log(`String: ${h}`);
    } else {
        console.log(`Number: ${h.toFixed(2)}`);
    }
})

//Using Tuple Types
let products: [string, number][] = [["Hat", 100], ["Gloves", 75]];
let tupleUnion: ([string, number] | boolean)[] = [true, false, hatTuple, ...products];

tupleUnion.forEach((elem: [string, number] | boolean) => {
    //a tuple cannot be identified
    //as Javascript handles tuples as Arrays this criteria is used followingly!!!
    if (elem instanceof Array){
        elem.forEach((tupleElem: string | number) => {
            if (typeof tupleElem === "string"){
                console.log(`String Value: ${tupleElem}`);
            } else {
                console.log(`Number Value: ${tupleElem}`);
            }
        })
    } else if (typeof elem === "boolean"){
        console.log(`Boolean Value: ${elem}`);
    }
})



//ENUMS
enum Product {Hat, Gloves = 20, Umbrella};

let productsEnum: [Product, number][] = [[Product.Hat, 100], [Product.Gloves, 75]];

productsEnum.forEach((prod: [Product, number]) => {
    switch (prod[0]){
        case Product.Hat:
            writePrice("Hat", calculateTax(prod[1]));
            break;
        case Product.Gloves:
            writePrice("Gloves", calculateTax(prod[1]));
            break;
        case Product.Umbrella:
            writePrice("Umbrella", calculateTax(prod[1]));
            break;

    }
});

[Product.Hat, Product.Gloves, Product.Umbrella].forEach(val => {
    console.log(`Number value: ${val}`);
})

let productValue: Product = 0;
let productName: string = Product[productValue];
console.log(`Value: ${productValue}, Name: ${productName}`);


enum OtherEnum { First = 10, Two = 20 };
enum Product2 { Hat = OtherEnum.First + 1, Gloves = 20, Umbrella = Hat + Gloves};
let productValue2: Product2 = 0;
let productName2: string = Product2[productValue2];
//no element on position 0
console.log(`Value: ${productValue2}, Name: ${productName2}`);

//Using String enums
enum City { London = "London", Paris = "Paris", NY = "New York"};
console.log(`City: ${City.London}`);

//Understanding Type Guard Limitations


//productValue3 is declared as Product2 in Typescript, whether it is a number in Javascript!
let productValue3: Product2 = Product2.Hat;
if (typeof productValue3 === "number"){
    console.log("1_Value is a number");
}

let unionValue: number | Product2 = Product2.Hat;
if (typeof unionValue === "number"){
    console.log("2_Value is a number");
}

//Using Constant Enums
const enum Product4 {Hat, Gloves, Umbrella};
let productValue4 = Product4.Hat;
//constant enums are very limited in it's usage --> see Book p. 205ff
//therefore this is not possible: let productName4 = Product4[0];



//LITERAL VALUE TYPES