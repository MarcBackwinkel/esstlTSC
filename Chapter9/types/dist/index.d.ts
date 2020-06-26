declare function calculateTax(amount: number): number;
declare function writePrice(product: string, price: number): void;
declare let prices: number[];
declare let names: string[];
declare let pricesAny: any[];
declare let hatTuple: [string, number];
declare let glovesTuple: [string, number];
declare let products: [string, number][];
declare let tupleUnion: ([string, number] | boolean)[];
declare enum Product {
    Hat = 0,
    Gloves = 20,
    Umbrella = 21
}
declare let productsEnum: [Product, number][];
declare let productValue: Product;
declare let productName: string;
declare enum OtherEnum {
    First = 10,
    Two = 20
}
declare enum Product2 {
    Hat = 11,
    Gloves = 20,
    Umbrella = 31
}
declare let productValue2: Product2;
declare let productName2: string;
declare enum City {
    London = "London",
    Paris = "Paris",
    NY = "New York"
}
declare let productValue3: Product2;
declare let unionValue: number | Product2;
declare const enum Product4 {
    Hat = 0,
    Gloves = 1,
    Umbrella = 2
}
declare let productValue4: Product4;
