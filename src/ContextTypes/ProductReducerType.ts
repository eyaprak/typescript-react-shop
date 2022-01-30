import { ProductType } from './ProductType';
export type ProductReducerType = {
  type: 'GET_PRODUCTS_LOADING' | 'GET_PRODUCTS_SUCCESS' | 'GET_PRODUCTS_FAIL';
  payload?: ProductType[] | string;
};
