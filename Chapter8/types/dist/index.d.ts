declare function calculateTax(amount: any, discount: any): number;
declare let taxValue: number;
declare function calculateTaxOptionalParameters(amount: any, discount?: any): number;
declare function calculateTaxDefaultParameters(amount: any, discount?: number): number;
declare function calculateTaxRestParameters(amount: any, discount?: number, ...extraFees: any[]): any;
