export class Product {
    constructor (
        public productid: number,
        public productname: string
    ) {}
}

export interface IProduct {
    ProductID: number;
    ProductName: string;
}

