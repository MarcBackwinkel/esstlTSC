let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`);
let bootsPrice = "100";
console.log(`Boots price: ${bootsPrice}`);

/*function sumPrices(...numbers){
    return numbers.reduce((total, val) => {
        let retItem = total + (Number.isNaN(Number(val)) ? 0 : Number(val));
        console.log(`-- total: ${total} , val: ${val} = ${retItem}`);
        return retItem;
    },0);
}*/

let sumPrices = (...numbers) => numbers.reduce((total, val) => 
        total + (Number.isNaN(Number(val)) ? 0 : Number(val)));

console.log("1. Example");
let totalPrice = sumPrices(hatPrice, bootsPrice);
console.log(`Total: ${totalPrice} ${typeof(totalPrice)}`);

console.log("2. Example");
totalPrice = sumPrices(100, 200, 300);
console.log(`Total: ${totalPrice} ${typeof(totalPrice)}`);

console.log("3. Example");
totalPrice = sumPrices(100, 200);
console.log(`Total: ${totalPrice} ${typeof(totalPrice)}`);

//Working with arrays
let names = ["Hat", "Boots", "Gloves"];
let prices = [];

prices.push(100);
prices.push("100");
prices.push(50.25);

console.log(`First Item: ${names[0]}: ${prices[0]}`);
totalPrice = sumPrices(...prices);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);

let combinedArray = [...names, ...prices];
combinedArray.forEach(element => console.log(`Combined Array Element: ${element}`));

//Working with Objects
let hat = {
    name: "Hat",
    price: 100
}

let boots = {
    name: "Boots",
    price: "100"
}

totalPrice = sumPrices(hat.price, boots.price);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);

let gloves = {
    productName: "Gloves",
    price: "40"
}

gloves.name = gloves.productName;
delete gloves.productName;
gloves.price = 20;

totalPrice = sumPrices(hat.price, boots.price, gloves.price);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);

//Guarding against Undefined Objects and Properties
/*
    undefined, null --> false
*/
let propertyCheck = hat.price || 0;
let objectAndPropertyCheck = (hat || {}).price || 0;
console.log(`Checks: ${propertyCheck}, ${objectAndPropertyCheck}`);

//let otherHat = hat wuerde otherHat auf das Objekt hat verlinken
let otherHat = hat;
console.log(`otherHat.price = ${otherHat.price}`);
hat.price = 50;
console.log(`otherHat.price = ${otherHat.price}`);
hat.price = 100;

//Inhalt eines Objekts kopieren via Spread Operator
otherHat = {...hat};
hat.price = 50;
console.log(`Spread: ${otherHat.name}, ${otherHat.price}`);

let additionalProperties = {...hat, discounted: true};
//built-in JSON.stringify creates a string representation of an object
console.log(`Additional: ${JSON.stringify(additionalProperties)}`);

let replacesProperties = {...hat, price: 10};
console.log(`Replaces: ${JSON.stringify(replacesProperties)}`);

let {price, ...someProperties} = hat;
console.log(`Selected : ${JSON.stringify(someProperties)}`);

//Defining Getters and Setters
let hat2 = {
    name: "Hat",
    _price: 100,
    priceIncTax: 100 * 1.2,

    set price(newPrice){
        this._price = newPrice;
        this.priceIncTax = this._price * 1.2;
    },

    get price(){
        return this._price;
    },

    //This is a method!
    //alternative: writeDetails: function(){...}
    writeDetails(){
        console.log(`normal Function: ${this.name}: ${this.price}, ${this.priceIncTax}`);
    },

    writeDetailsWithArrowFunction: () =>
        console.log(`Arrow Function: ${this.name}: ${this.price}, ${this.priceIncTax}`)
    
};

let boots2 = {
    name: "Boots",
    price: "100",

    get priceIncTax(){
        return Number(this.price * 1.2);
    }
};

hat2.writeDetails();
hat2.writeDetailsWithArrowFunction();
hat2.price = 120;
hat2.writeDetails();
hat2.writeDetailsWithArrowFunction();

console.log(`Boots2: ${boots2.price}, ${boots2.priceIncTax}`);
boots2.price = 120;
console.log(`Boots2: ${boots2.price}, ${boots2.priceIncTax}`);

//Understanding the "this" keyword in stand-alone Functions
function writeMessage(message){
    console.log(`${this.greeting}, ${message}`);
}
greeting = "Hello";     //Caution: !== let greeting; here greeting is assigned to global object!
writeMessage("It is sunny today.");                    //convention in JS to invoke a function
writeMessage.call(global, "It is sunny today");        //standard way to invoke a function

let myObject = {
    greeting: "Hi, there",

    writeMessage2(message){
        console.log(`${this.greeting}, ${message}`);
    }
}
myObject.writeMessage2("It is sunny today.");

let myFunction = myObject.writeMessage2;
myFunction("It is sunny today..");          //Focus on myObject is lost --> switch back to global object!

//Changing the behaviour of the "this" keyword by "binding" the method to the object "myObject"
console.log("-> myObject is bound now!");
myObject.writeMessage2 = myObject.writeMessage2.bind(myObject);
myObject.writeMessage2("It is sunny today.");

myFunction = myObject.writeMessage2;
myFunction("It is sunny today..");          //Focus on myObject is lost --> switch back to global object!

//Understanding "this" in Arrow Functions
console.log("-> getWriter-Function comes into play...")
//get Writer returns an arrow Function
myObject.getWriter = function() {
    return (message) => console.log(`${this.greeting}, ${message}`);
}

//double ()() as "myObject.getWriter()" receives the callback function; after that the arguments follow
myObject.getWriter()("It is raining today...");

let standAlone = myObject.getWriter;
standAlone()("It is cloudy today...");
let standAloneWriter = standAlone();
standAloneWriter("It is sunny today...");