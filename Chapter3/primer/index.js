let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`);
let bootsPrice = "100";
console.log(`Boots price: ${bootsPrice}`);

function sumPrices(...numbers){
    return numbers.reduce((total, val) => {
        let retItem = total + (Number.isNaN(Number(val)) ? 0 : Number(val));
        console.log(`-- total: ${total} , val: ${val} = ${retItem}`);
        return retItem;
    },0);
}

console.log("1. Example");
let totalPrice = sumPrices(hatPrice, bootsPrice);
console.log(`Total: ${totalPrice} ${typeof(totalPrice)}`);

console.log("2. Example");
totalPrice = sumPrices(100, 200, 300);
console.log(`Total: ${totalPrice} ${typeof(totalPrice)}`);

console.log("3. Example");
totalPrice = sumPrices(100, 200);
console.log(`Total: ${totalPrice} ${typeof(totalPrice)}`);
