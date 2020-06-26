//function calculateTax(amount){
//    return amount * 1.2;
//}

//in Javascript functions can be redefined; most recent implementation is used for a function call
//  !== function overloading
//Typescript reports an error when doing so!
function calculateTax(amount, discount){
    return (amount * 1.2) - discount;
}

let taxValue = calculateTax(100, 0);
console.log(`2 args: ${taxValue}`);
/*
taxValue = calculateTax(100);
console.log(`1 arg: ${taxValue}`);
taxValue = calculateTax(100, 10, 20);
console.log(`3 args: ${taxValue}`);
*/

//Using Optional Parameters --> ?
function calculateTaxOptionalParameters(amount, discount?){
    return (amount * 1.2) - (discount || 0);
}

taxValue = calculateTaxOptionalParameters(100);
console.log(`1 arg: ${taxValue}`);

//Using Default Parameters
function calculateTaxDefaultParameters(amount, discount = 0){
    return (amount * 1.2) - discount;
}

taxValue = calculateTaxDefaultParameters(100);
console.log(`1 arg: ${taxValue}`);

//Using a Rest Parameter
//!only one rest parameter allowed per function at the end of the parameter list!
function calculateTaxRestParameters(amount, discount = 0, ...extraFees){
    return (amount * 1.2) - discount
        + extraFees.reduce((total, val) => total + val, 0);
}

taxValue = calculateTaxRestParameters(100, 10, 20);
console.log(`3 args: ${taxValue}`);
taxValue = calculateTaxRestParameters(100, 10, 20, 1, 30, 7);
console.log(`6 args: ${taxValue}`);

//Applying Type Annotations to Function Parameters
function calculateTaxTypeAnnotatedParameters(amount: number, discount: number = 0, ...extraFees: number[]){
    return (amount * 1.2) - discount
        + extraFees.reduce((total, val) => total + val, 0);
}

taxValue = calculateTaxTypeAnnotatedParameters(100, 10, 20);
console.log(`3 args: ${taxValue}`);
taxValue = calculateTaxTypeAnnotatedParameters(100, 10, 20, 1, 30, 7);
console.log(`6 args: ${taxValue}`);

//Controlling Null Parameter Values
//possible with strictNullChecks = false; null value will be coerced to the number 0 by the multiplication operator
//not possible with strictNullChecks = true --> amount must be annotated as number | null
function calculateTaxNullParameters(amount: number | null, discount: number = 0, ...extraFees: number[]){
    if (amount != null){
        return (amount * 1.2) - discount
            + extraFees.reduce((total, val) => total + val, 0);
    }
    // if amount === null then "undefined" is returned (implicit return)
    //implicit return is prevented by noImplicitReturns in tsconfig.json, then an else tranch is needed
    else {
        return undefined;
    }
}

let taxValueNull = calculateTaxNullParameters(null, 0);
console.log(`null arg: ${taxValueNull}`);

//Using Type Annotations for Function Results
function calculateTaxTypeAnnoReturn(amount: number, discount: number = 0, 
                                        ...extraFees: number[]): number{
    return (amount * 1.2) - discount
            + extraFees.reduce((total, val) => total + val, 0);
}
taxValue = calculateTaxTypeAnnoReturn(100, 0);
console.log(`2 args: ${taxValue}`);

//Defining void functions
function writeValue(label: string, value: number): void {
    console.log(`${label}! ${value}`);
}
writeValue("Tax value", calculateTaxTypeAnnoReturn(100, 0));

//Overloading Function Types
function calculateTaxOverloaded(amount: number | null): number | null {
    if (amount != null){
        return amount * 1.2;
    }
    return null;
}

let taxValueNumberOrNull: number | null = calculateTaxOverloaded(100);
if (typeof taxValueNumberOrNull === "number"){
    writeValue("Tax Value NoN", taxValueNumberOrNull);
}