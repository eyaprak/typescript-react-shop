//MUI Components
import ProductList from '../Components/Product/ProductList';
//Styles
import { Wrapper } from './HomePage.styles';

const HomePage = () => {
  return (
    <Wrapper>
      <div className='innerDiv'>
        <ProductList />
      </div>
    </Wrapper>
  );
};

export default HomePage;
