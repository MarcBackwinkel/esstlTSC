let myVar;

myVar = 12;
console.log(`${myVar} = ${typeof(myVar)}`);
myVar = "Hello";
console.log(`${myVar} = ${typeof myVar}`);
myVar = true;
console.log(`${myVar} = ${typeof myVar}`);

function calculateTax(amount){
    return amount * 1.2;
}
console.log(`${12} = ${calculateTax(12)}`);
console.log(`${"Hello"} = ${calculateTax("Hello")}`);
console.log(`${true} = ${calculateTax(true)}`);

//with Type Annotations
function calculateTaxWithTypeAnno(amount: number): number{
    return amount * 1.2;
}
console.log(`${12} = ${calculateTaxWithTypeAnno(12)}`);
//console.log(`${"Hello"} = ${calculateTaxWithTypeAnno("Hello")}`);
//console.log(`${true} = ${calculateTaxWithTypeAnno(true)}`);
let price: number = 100;
let taxAmount: number = calculateTaxWithTypeAnno(price);
let halfShare: number = taxAmount / 2;
console.log(`Full amount in tax: ${taxAmount}`);
console.log(`Half share: ${halfShare}`);

//Implicitly Defined Static Types
function calculateTaxImplicitly(amount: number){
    //return amount * 1.2;  --> function returns NUMBER as input parameter is a number
    return (amount * 1.2).toFixed(2);   //--> function returns a string!
}
let priceImpl = 100;
let taxAmountImpl = calculateTaxImplicitly(priceImpl);
//let halfShareImpl = taxAmountImpl / 2;
console.log(`Full amount in tax: ${taxAmountImpl}`);
//console.log(`Half share: ${halfShareImpl}`);

//Using the any type
function calculateTaxWithAny(amount: any): any {
    return `$${(amount * 1.2).toFixed(2)}`;
}
let priceAny = 100;
let taxAmountAny = calculateTaxWithAny(priceAny);
let halfShareAny = taxAmountAny / 2;
console.log(`Price: ${priceAny}`);
console.log(`Full amount in tax: ${taxAmountAny}`);
console.log(`Half share: ${halfShareAny}`);
let newResult: any = calculateTaxWithAny(200);
let myNumber: number = newResult;
//console.log(`Number value: ${myNumber.toFixed(2)}`);

//Using Implicitly Defined Any Types
function calculateTaxImplAny(amount): any {
    return `$${(amount * 1.2).toFixed(2)}`;
}
let personalVal = calculateTaxImplAny("Bob");
console.log(`Name: ${personalVal}`);

//Using Type Unions
function calculateTaxUnion(amount: number, format: boolean): number | string {
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}
let taxNumber = calculateTaxUnion(100, false) as number;
let taxString = calculateTaxUnion(100, true) as string;
let taxBoolean = calculateTaxUnion(100, false) as any as boolean;
console.log(`Number Value: ${taxNumber.toFixed(2)}`);
console.log(`String Value: ${taxString.charAt(0)}`);
console.log(`Boolean Value: ${taxBoolean}`);

//Using a type guard
let taxValue = calculateTaxUnion(100, false);
if (typeof taxValue === "number"){
    console.log(`Number Value: ${taxValue.toFixed(2)}`);
} else if (typeof taxValue === "string"){
    console.log(`String Value: ${taxValue.charAt(0)}`);
}
switch (typeof taxValue){
    case "number":
        console.log(`Number Value: ${taxValue.toFixed(2)}`);
        break;
    case "string":
        console.log(`String Value: ${taxValue.charAt(0)}`);
        break;
    //Never type
    default:
        if (taxValue === null){
            console.log("Value is null");
        } else {
            let value: never = taxValue;
            console.log(`Unexpected type for value: ${value}`);
        }      
}

//Using the unknown type
function calculateTaxUnknown(amount: number, format: boolean): string | number {

    //if (amount === 0){
        //return null;    // !!! null is own type which is not covered by string | number
    //}

    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}
let taxValueUnknown: string | number = calculateTaxUnknown(100, false);

let newResultUnknown: unknown = calculateTaxUnknown(200, false);
//let myNumberUnknown: number = newResultUnknown; --> not possible to assign unknown value to another type without tpye assertion
let myNumberUnknown: number = newResultUnknown as number;
console.log(`Number value: ${myNumberUnknown.toFixed(2)}`);

//Using Nullable Types
function calculateTaxNull(amount: number, format: boolean): string | number | null {

    if (amount === 0){
        return null;    // !!! null is own type which is not covered by string | number
    }

    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}
let taxValueNull: string | number | null = calculateTaxNull(0, false);
console.log(`Number value: ${taxValueNull}`);

//Removing null from a Union with an Assertion with "!" at the end
let taxValueNonNull : string | number = calculateTaxNull(100, false)!;
console.log(`Number value: ${taxValueNonNull}`);

//Removing null from a Union with a Type Guard
taxValueNull = calculateTaxNull(0, false);
if (taxValueNull !== null){
    let nonNullTaxValue: string | number = taxValue;
    switch (typeof nonNullTaxValue){
        case "number":
            console.log(`Number Value: ${nonNullTaxValue.toFixed(2)}`);
            break;
        case "string":
            console.log(`String Value: ${nonNullTaxValue.charAt(0)}`);
            break;
    }
} else {
    console.log("Value is not a string or a number.");
}

//Using the Definite Assignment Assertion
//Definite Assignment Assertion is a "!" behind the var name --> value is not null!!!
//not assigned variable will pass strictNullCheck with the Definite Assignment Assertion
let taxValueNullAssigned!: string | number | null;
//eval accepts a string and executes it as code
eval("taxValueNullAssigned = calculateTaxNull(100, false)");
console.log(`Number value: ${taxValueNullAssigned}`);