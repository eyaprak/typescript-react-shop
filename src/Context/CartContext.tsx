import { createContext, Dispatch, useReducer, useEffect } from 'react';
import { AppType } from '../ContextTypes/ContextAPIType';
import { CartType } from '../ContextTypes/CartType';
import { IAction } from '../ContextTypes/ReducerActionType';
import reducer from '../Reducers/CartReducer';

const controlLocalStorage = localStorage.getItem('cartItems');

const initialState: CartType = {
  cartItems: controlLocalStorage
    ? [...JSON.parse(localStorage.getItem('cartItems') || '')]
    : [],
};

export const CartContext = createContext<{
  state: CartType;
  dispatch: Dispatch<IAction>;
}>({
  state: initialState,
  dispatch: () => {},
});

const CartContextProvider = ({ children }: AppType) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    if (state.cartItems.length !== 0) {
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    } else {
      localStorage.setItem('cartItems', '[]');
    }
  }, [state.cartItems]);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
