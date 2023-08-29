import { StaticImageData } from 'next/image';

export interface Product {
  productId: number;
  productImage: string | StaticImageData;
  productTitle: string;
  productWeight: number;
  productPrice: number;
}
