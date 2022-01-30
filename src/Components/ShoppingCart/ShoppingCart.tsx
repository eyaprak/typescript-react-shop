import { useContext } from 'react';
import { Badge } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { StyledButton } from './ShoppingCart.styles';
//Context
import { DrawerContext } from '../../Context/DrawerContext';
import { CartContext } from '../../Context/CartContext';

const ShoppingCart = () => {
  const { setDrawer } = useContext(DrawerContext);
  const { state: cartItems } = useContext(CartContext);
  const calculateTotalItem = (): number =>
    cartItems.cartItems.reduce((ack: number, item) => ack + item.quantity, 0);
  return (
    <StyledButton
      color='inherit'
      onClick={() => {
        if (setDrawer) {
          setDrawer(true);
        }
      }}
    >
      <Badge badgeContent={calculateTotalItem()} color='error'>
        <AddShoppingCartIcon />
      </Badge>
    </StyledButton>
  );
};

export default ShoppingCart;
