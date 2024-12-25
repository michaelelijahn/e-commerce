export interface simplifiedProduct {
    _id: string;
    price: number;
    name: string;
    slug: string;
    category: string;
    imageUrl: string;
}

export interface detailedProduct {
    _id: string;
    images: any;
    price: number;
    name: string;
    slug: string;
    category: string;
    description: string;
    sizes: string[];
    price_id: string;
}