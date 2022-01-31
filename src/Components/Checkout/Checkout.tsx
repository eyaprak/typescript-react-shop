import { Wrapper, EmptyStyled } from './Checkout.styles';
import BillingAddress from './BillingAddress';
import CartComponent from './CartComponent';
import { useContext } from 'react';
import { Button } from '@material-ui/core';
import { CartContext } from '../../Context/CartContext';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';

const Checkout = () => {
  const { state: cartItems } = useContext(CartContext);

  if (cartItems.cartItems.length === 0) {
    return (
      <EmptyStyled>
        <ShoppingBasketOutlinedIcon
          style={{ fontSize: '150px', color: 'red' }}
        />
        <h3>Your Cart Is Currently Empty!</h3>
        <p>
          Looks like you haven't added
          <br /> anything to your cart
        </p>
        <Button variant='outlined' color='primary' fullWidth>
          Continue Shopping
        </Button>
      </EmptyStyled>
    );
  }

  return (
    <Wrapper>
      <BillingAddress />
      <CartComponent />
    </Wrapper>
  );
};

export default Checkout;
