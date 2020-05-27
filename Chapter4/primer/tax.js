//the default keyword is used when the module contains a single feature
//export default function(price){
//    return Number(price) * 1.2;
//}

//export without default --> import with curly braces!!!
export function calculateTax(price){
    return Number(price) * 1.2;
}

//export default --> import without curly braces!!!
export default function calcTaxAndSum(...prices){
    return prices.reduce((total, p) => total += calculateTax(p), 0);
}