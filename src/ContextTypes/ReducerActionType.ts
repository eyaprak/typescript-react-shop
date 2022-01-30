type ActionTypes = 'ADD_TO_CART' | 'REMOVE_FROM_CART';
import { ProductType } from './ProductType';

export interface IAction {
  type: ActionTypes;
  payload?: { product: ProductType; quantity: number };
}
