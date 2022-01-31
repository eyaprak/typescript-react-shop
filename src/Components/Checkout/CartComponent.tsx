import { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Wrapper, StyledHeader, StyledCartList } from './CartComponent.styles';
import { TextField, Button } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
const CartComponent = () => {
  const { state: cartItems } = useContext(CartContext);
  const [promoCode, setPromoCode] = useState('');

  const calculateTotalItem = (): number =>
    cartItems.cartItems.reduce((ack: number, item) => ack + item.quantity, 0);

  const calculateTotalPrice = (): number =>
    cartItems.cartItems.reduce(
      (ack: number, item) => ack + item.quantity * item.price,
      0
    );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPromoCode((event.target as HTMLInputElement).value);
  };

  return (
    <Wrapper>
      <StyledHeader>
        <h3>Your Cart</h3>
        <span>{calculateTotalItem()}</span>
      </StyledHeader>
      <div>
        <StyledCartList>
          {cartItems.cartItems.map((item) => (
            <li key={item.id}>
              <span className='title'>
                {item.title + ' ' + 'x' + item.quantity}
              </span>
              <span className='price'>${item.price.toFixed(2)}</span>
            </li>
          ))}
          <li>
            Total (USD)
            <span style={{ fontWeight: 'bold' }}>
              ${calculateTotalPrice().toFixed(2)}
            </span>
          </li>
        </StyledCartList>
      </div>
      <div>
        <TextField
          id='promo-code'
          label='Promo Code'
          value={promoCode}
          onChange={handleChange}
          variant='filled'
          fullWidth
          InputProps={{
            endAdornment: (
              <Button variant='contained' color='primary'>
                <CheckIcon />
              </Button>
            ),
          }}
        />
      </div>
    </Wrapper>
  );
};

export default CartComponent;
