import { useContext } from 'react';
import CartItem from './CartItem';
import { Wrapper } from './Cart.styles';
import { CartContext } from '../../Context/CartContext';
import Buttons from './Buttons';

const Cart = () => {
  const { state: cartItems, dispatch } = useContext(CartContext);
  const calculateTotalPrice = () =>
    cartItems.cartItems.reduce(
      (ack: number, item) => ack + item.price * item.quantity,
      0
    );

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.cartItems.map((item) => (
        <CartItem key={item.id} item={item} dispatch={dispatch} />
      ))}

      {cartItems.cartItems.length !== 0 && (
        <Buttons totalPrice={calculateTotalPrice()} />
      )}
    </Wrapper>
  );
};

export default Cart;
