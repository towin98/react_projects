export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand?: string; // Hacer opcional
    sku: string;
    weight: number;
    dimensions: Dimensions;
    warrantyInformation?: string; // Hacer opcional
    shippingInformation?: string; // Hacer opcional
    availabilityStatus?: string; // Hacer opcional
    reviews?: Review[]; // Hacer opcional
    returnPolicy?: string; // Hacer opcional
    minimumOrderQuantity?: number; // Hacer opcional
    meta?: MetaData; // Hacer opcional
    images: string[];
    thumbnail: string;
}

export interface Dimensions {
    width: number;
    height: number;
    depth: number;
}

export interface Review {
    rating: number;
    comment: string;
    date: string;  // Se puede cambiar a `Date` si el valor se convierte de cadena a fecha en el código
    reviewerName: string;
    reviewerEmail: string;
}

export interface MetaData {
    createdAt: string; // Igual que con `date`, puedes cambiar a `Date` si se convierte a fecha en el código
    updatedAt: string;
    barcode: string;
    qrCode: string;
}