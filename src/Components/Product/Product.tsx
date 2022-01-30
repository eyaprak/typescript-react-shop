import { useContext } from 'react';
import { ProductType } from '../../ContextTypes/ProductType';
import { Wrapper } from './Product.styles';
import Button from '@material-ui/core/Button';
// Context
import { CartContext } from '../../Context/CartContext';
//Notification
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DrawerContext } from '../../Context/DrawerContext';
import { Link } from 'react-router-dom';
import { Container } from '../../App.styles';
type Props = {
  product: ProductType;
};
const Product: React.FC<Props> = ({ product }) => {
  const { dispatch } = useContext(CartContext);
  const { setDrawer } = useContext(DrawerContext);
  return (
    <Container>
      <Wrapper>
        <Link to={`/product/` + product.id}>
          <img src={product.image} alt={product.title} />
        </Link>

        <Link to={`/product/` + product.id}>
          <h3 className='product-title'>{product.title}</h3>
        </Link>

        <h3 className='price'>${product.price}</h3>
        <Button
          variant='contained'
          color='primary'
          onClick={() => {
            dispatch({
              type: 'ADD_TO_CART',
              payload: { product: product, quantity: 1 },
            });
            toast.success('Item added to the cart!', {
              position: 'top-center',
              onClick: () => {
                if (setDrawer) {
                  setDrawer(true);
                }
              },
            });
          }}
        >
          Add To Cart
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Product;
