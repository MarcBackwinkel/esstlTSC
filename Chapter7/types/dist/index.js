let myVar;
myVar = 12;
console.log(`${myVar} = ${typeof (myVar)}`);
myVar = "Hello";
console.log(`${myVar} = ${typeof myVar}`);
myVar = true;
console.log(`${myVar} = ${typeof myVar}`);
function calculateTax(amount) {
    return amount * 1.2;
}
console.log(`${12} = ${calculateTax(12)}`);
console.log(`${"Hello"} = ${calculateTax("Hello")}`);
console.log(`${true} = ${calculateTax(true)}`);
//with Type Annotations
function calculateTaxWithTypeAnno(amount) {
    return amount * 1.2;
}
console.log(`${12} = ${calculateTaxWithTypeAnno(12)}`);
//console.log(`${"Hello"} = ${calculateTaxWithTypeAnno("Hello")}`);
//console.log(`${true} = ${calculateTaxWithTypeAnno(true)}`);
let price = 100;
let taxAmount = calculateTaxWithTypeAnno(price);
let halfShare = taxAmount / 2;
console.log(`Full amount in tax: ${taxAmount}`);
console.log(`Half share: ${halfShare}`);
//Implicitly Defined Static Types
function calculateTaxImplicitly(amount) {
    //return amount * 1.2;  --> function returns NUMBER as input parameter is a number
    return (amount * 1.2).toFixed(2); //--> function returns a string!
}
let priceImpl = 100;
let taxAmountImpl = calculateTaxImplicitly(priceImpl);
//let halfShareImpl = taxAmountImpl / 2;
console.log(`Full amount in tax: ${taxAmountImpl}`);
//console.log(`Half share: ${halfShareImpl}`);
//Using the any type
function calculateTaxWithAny(amount) {
    return `$${(amount * 1.2).toFixed(2)}`;
}
let priceAny = 100;
let taxAmountAny = calculateTaxWithAny(priceAny);
let halfShareAny = taxAmountAny / 2;
console.log(`Price: ${priceAny}`);
console.log(`Full amount in tax: ${taxAmountAny}`);
console.log(`Half share: ${halfShareAny}`);
let newResult = calculateTaxWithAny(200);
let myNumber = newResult;
//console.log(`Number value: ${myNumber.toFixed(2)}`);
//Using Implicitly Defined Any Types
function calculateTaxImplAny(amount) {
    return `$${(amount * 1.2).toFixed(2)}`;
}
let personalVal = calculateTaxImplAny("Bob");
console.log(`Name: ${personalVal}`);
//Using Type Unions
function calculateTaxUnion(amount, format) {
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}
let taxNumber = calculateTaxUnion(100, false);
let taxString = calculateTaxUnion(100, true);
let taxBoolean = calculateTaxUnion(100, false);
console.log(`Number Value: ${taxNumber.toFixed(2)}`);
console.log(`String Value: ${taxString.charAt(0)}`);
console.log(`Boolean Value: ${taxBoolean}`);
//Using a type guard
let taxValue = calculateTaxUnion(100, false);
if (typeof taxValue === "number") {
    console.log(`Number Value: ${taxValue.toFixed(2)}`);
}
else if (typeof taxValue === "string") {
    console.log(`String Value: ${taxValue.charAt(0)}`);
}
switch (typeof taxValue) {
    case "number":
        console.log(`Number Value: ${taxValue.toFixed(2)}`);
        break;
    case "string":
        console.log(`String Value: ${taxValue.charAt(0)}`);
        break;
    //Never type
    default:
        if (taxValue === null) {
            console.log("Value is null");
        }
        else {
            let value = taxValue;
            console.log(`Unexpected type for value: ${value}`);
        }
}
//Using the unknown type
function calculateTaxUnknown(amount, format) {
    //if (amount === 0){
    //return null;    // !!! null is own type which is not covered by string | number
    //}
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}
let taxValueUnknown = calculateTaxUnknown(100, false);
let newResultUnknown = calculateTaxUnknown(200, false);
//let myNumberUnknown: number = newResultUnknown; --> not possible to assign unknown value to another type without tpye assertion
let myNumberUnknown = newResultUnknown;
console.log(`Number value: ${myNumberUnknown.toFixed(2)}`);
//Using Nullable Types
function calculateTaxNull(amount, format) {
    if (amount === 0) {
        return null; // !!! null is own type which is not covered by string | number
    }
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}
let taxValueNull = calculateTaxNull(0, false);
console.log(`Number value: ${taxValueNull}`);
//Removing null from a Union with an Assertion with "!" at the end
let taxValueNonNull = calculateTaxNull(100, false);
console.log(`Number value: ${taxValueNonNull}`);
//Removing null from a Union with a Type Guard
taxValueNull = calculateTaxNull(0, false);
if (taxValueNull !== null) {
    let nonNullTaxValue = taxValue;
    switch (typeof nonNullTaxValue) {
        case "number":
            console.log(`Number Value: ${nonNullTaxValue.toFixed(2)}`);
            break;
        case "string":
            console.log(`String Value: ${nonNullTaxValue.charAt(0)}`);
            break;
    }
}
else {
    console.log("Value is not a string or a number.");
}
//Using the Definite Assignment Assertion
//Definite Assignment Assertion is a "!" behind the var name --> value is not null!!!
//not assigned variable will pass strictNullCheck with the Definite Assignment Assertion
let taxValueNullAssigned;
//eval accepts a string and executes it as code
eval("taxValueNullAssigned = calculateTaxNull(100, false)");
console.log(`Number value: ${taxValueNullAssigned}`);
