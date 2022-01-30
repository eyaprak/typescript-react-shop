import { IAction } from '../ContextTypes/ReducerActionType';
import { ProductType } from '../ContextTypes/ProductType';
import { CartType } from '../ContextTypes/CartType';

const reducer = (state: CartType, action: IAction): CartType => {
  switch (action.type) {
    //ADD ITEM TO CART
    case 'ADD_TO_CART':
      const isItemInCart = state.cartItems.find(
        (item) => item.id === action?.payload?.product?.id
      );

      if (isItemInCart) {
        let newList = state.cartItems.map((item) =>
          item.id === action?.payload?.product?.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );

        return {
          cartItems: [...newList],
        };
      }

      //First time the item is added
      const concateItems = [
        ...state.cartItems,
        { ...action.payload?.product, quantity: action.payload?.quantity },
      ] as ProductType[];

      return {
        cartItems: concateItems,
      };

    // REMOVE ITEM FROM CART
    case 'REMOVE_FROM_CART':
      const newList = state.cartItems.reduce((ack, item) => {
        if (item.id === action?.payload?.product.id) {
          if (item.quantity === 1) return ack;
          return [...ack, { ...item, quantity: item.quantity - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as ProductType[]);

      return {
        cartItems: newList,
      };

    default:
      return state;
  }
};

export default reducer;
