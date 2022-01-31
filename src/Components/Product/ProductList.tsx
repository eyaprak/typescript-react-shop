import { useContext, useEffect } from 'react';
import { ProductContext } from '../../Context/ProductContext';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Grid } from '@material-ui/core';
import Product from './Product';
import { Container } from '../../App.styles';
import Title from '../Title/Title';

const ProductList = () => {
  const { products, loading, error, getProducts } = useContext(ProductContext);

  useEffect(() => {
    if (getProducts) getProducts();
  }, []);

  if (loading)
    return (
      <div style={{ marginTop: '84px' }}>
        <LinearProgress />
      </div>
    );
  return (
    <Container>
      <Title title='Popular Products' />
      <Grid container spacing={2}>
        {products?.map((product) => (
          <Grid item key={product.id} xs={12} md={3} sm={6}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
