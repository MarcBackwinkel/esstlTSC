declare let myVar: any;
declare function calculateTax(amount: any): number;
declare function calculateTaxWithTypeAnno(amount: number): number;
declare let price: number;
declare let taxAmount: number;
declare let halfShare: number;
declare function calculateTaxImplicitly(amount: number): string;
declare let priceImpl: number;
declare let taxAmountImpl: string;
declare function calculateTaxWithAny(amount: any): any;
declare let priceAny: number;
declare let taxAmountAny: any;
declare let halfShareAny: number;
declare let newResult: any;
declare let myNumber: number;
declare function calculateTaxImplAny(amount: any): any;
declare let personalVal: any;
declare function calculateTaxUnion(amount: number, format: boolean): number | string;
declare let taxNumber: number;
declare let taxString: string;
declare let taxBoolean: boolean;
declare let taxValue: string | number;
declare function calculateTaxUnknown(amount: number, format: boolean): string | number;
declare let taxValueUnknown: string | number;
declare let newResultUnknown: unknown;
declare let myNumberUnknown: number;
declare function calculateTaxNull(amount: number, format: boolean): string | number | null;
declare let taxValueNull: string | number | null;
declare let taxValueNonNull: string | number;
declare let taxValueNullAssigned: string | number | null;
