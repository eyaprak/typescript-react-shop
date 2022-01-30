import { ProductType } from './ProductType';
export type InitialStateType = {
  products: ProductType[];
  loading: boolean;
  error: string;
  currentProduct: ProductType;
  getProduct?: (id: string) => void;
  getProducts?: () => void;
};
