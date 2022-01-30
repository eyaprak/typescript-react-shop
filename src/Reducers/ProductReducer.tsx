import { ProductReducerType } from '../ContextTypes/ProductReducerType';
import { InitialStateType } from '../ContextTypes/InitialStateType';

export const ProductReducer = (
  state: InitialStateType,
  action: ProductReducerType
) => {
  switch (action.type) {
    case 'GET_PRODUCTS_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'GET_PRODUCTS_SUCCESS':
      return {
        products: action.payload,
        loading: false,
        error: '',
      };
    case 'GET_PRODUCTS_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
