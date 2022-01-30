import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Container';
import { useContext } from 'react';
import { DrawerContext } from '../../Context/DrawerContext';
import { StyledBox } from './Buttons.styled';

type ButtonsProps = {
  totalPrice: number;
};

const Buttons: React.FC<ButtonsProps> = ({ totalPrice }) => {
  const { setDrawer } = useContext(DrawerContext);

  return (
    <>
      <StyledBox>
        <Button variant='contained' color='secondary' fullWidth>
          Checkout (${totalPrice.toFixed(2)})
        </Button>
        <Button
          variant='outlined'
          color='primary'
          fullWidth
          onClick={() => {
            if (setDrawer) {
              setDrawer(false);
            }
          }}
        >
          Continue Shopping
        </Button>
      </StyledBox>
    </>
  );
};

export default Buttons;
