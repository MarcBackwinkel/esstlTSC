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

//Applying Type Annotations  to Function Parameters