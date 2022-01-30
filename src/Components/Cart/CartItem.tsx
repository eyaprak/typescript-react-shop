import { ProductType } from '../../ContextTypes/ProductType';
import Button from '@material-ui/core/Button';
import { Wrapper } from './CartItem.styles';
import { IAction } from '../../ContextTypes/ReducerActionType';

type PropTypes = {
  item: ProductType;
  dispatch: React.Dispatch<IAction>;
};
const CartItem: React.FC<PropTypes> = ({ item, dispatch }) => {
  return (
    <Wrapper>
      <div>
        <h3>{item.title}</h3>
        <div className='information'>
          <p>Price: ${item.price}</p>
          <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
        </div>
        <div className='buttons'>
          <Button
            variant='outlined'
            size='small'
            color='primary'
            disableElevation
            onClick={() =>
              dispatch({
                type: 'REMOVE_FROM_CART',
                payload: { product: item, quantity: 1 },
              })
            }
          >
            -
          </Button>
          <p>{item.quantity}</p>
          <Button
            size='small'
            variant='outlined'
            color='primary'
            disableElevation
            onClick={() => {
              dispatch({
                type: 'ADD_TO_CART',
                payload: { product: item, quantity: 1 },
              });
            }}
          >
            +
          </Button>
        </div>
      </div>
      <img src={item.image} alt={item.title} />
    </Wrapper>
  );
};

export default CartItem;
