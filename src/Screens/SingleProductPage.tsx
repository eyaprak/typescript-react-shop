import { ProductContext } from '../Context/ProductContext';
import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CircularProgress, IconButton } from '@material-ui/core';
import { Container } from '../App.styles';
import {
  Wrapper,
  LeftSide,
  RightSide,
  StyledPrice,
  StyledQuantity,
  ButtonWrapper,
  StyledButton,
} from './SingleProductPage.styles';
import { CartContext } from '../Context/CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DrawerContext } from '../Context/DrawerContext';
import BreadCrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocalMallIcon from '@material-ui/icons/LocalMall';

const SingleProduct = () => {
  let { currentProduct, getProduct, loading } = useContext(ProductContext);
  const { id } = useParams();
  const { dispatch } = useContext(CartContext);
  const { setDrawer } = useContext(DrawerContext);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => {
      return prev + 1;
    });
  };

  const handleDecraseQuantity = () => {
    setQuantity((prev) => {
      if (prev === 1) return 1;
      return prev - 1;
    });
  };
  useEffect(() => {
    if (getProduct) {
      getProduct(id!);
    }
  }, [id]);

  if (loading)
    return (
      <Container
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress />
      </Container>
    );

  return (
    <>
      <Container marginTop='30'>
        <BreadCrumbs name={currentProduct.title} />
        <Wrapper>
          <LeftSide>
            <img src={currentProduct.image} alt='' />
            <img src={currentProduct.image} className='thumbnail' />
          </LeftSide>
          <RightSide>
            <h3 className='productTitle'>
              {currentProduct.title?.toUpperCase()}
            </h3>
            <p className='productDescription'>{currentProduct.description}</p>
            <StyledPrice>
              <p className='productPrice'>
                <span className='productRealPrice'>
                  ${(currentProduct?.price * 1.2).toFixed(2)}
                </span>
                ${currentProduct?.price?.toFixed(2)}
              </p>
              <StyledQuantity>
                <div className='flex'>
                  <span className='quantity'> Quantity:</span>
                  <div className='innerDiv'>
                    <IconButton onClick={handleDecraseQuantity}>
                      <NavigateBeforeIcon
                        color='primary'
                        cursor={'pointer'}
                        fontSize='large'
                      />
                    </IconButton>
                    <input
                      type='text'
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                      min={1}
                    />
                    <IconButton onClick={handleIncreaseQuantity}>
                      <NavigateNextIcon
                        color='primary'
                        cursor={'pointer'}
                        fontSize='large'
                      />
                    </IconButton>
                  </div>
                </div>
              </StyledQuantity>
            </StyledPrice>
            <ButtonWrapper>
              <StyledButton
                size='large'
                variant='contained'
                color='primary'
                onClick={() => {
                  if (dispatch) {
                    dispatch({
                      type: 'ADD_TO_CART',
                      payload: { product: currentProduct, quantity: quantity },
                    });
                    toast.success('Item added to the cart!', {
                      position: 'top-center',
                      onClick: () => {
                        if (setDrawer) {
                          setDrawer(true);
                        }
                      },
                    });
                    setQuantity(1);
                  }
                }}
              >
                <ShoppingBasketIcon /> Add To Cart
              </StyledButton>
              <StyledButton
                variant='contained'
                color='secondary'
                size='large'
                onClick={() => {
                  if (dispatch) {
                    dispatch({
                      type: 'ADD_TO_CART',
                      payload: { product: currentProduct, quantity: quantity },
                    });
                  }
                  toast.success('Item added to the cart!', {
                    position: 'top-center',
                    onClick: () => {
                      if (setDrawer) {
                        setDrawer(true);
                      }
                    },
                  });
                  navigate('/checkout');
                }}
              >
                <LocalMallIcon />
                <span>Buy Now</span>
              </StyledButton>
            </ButtonWrapper>
          </RightSide>
        </Wrapper>
      </Container>
    </>
  );
};

export default SingleProduct;
