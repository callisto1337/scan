export type ProductInfo = Record<'barCode' | 'value', string>;

export type ProductsData = Record<'products', ProductInfo[]>;
