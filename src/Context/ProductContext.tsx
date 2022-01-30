import { createContext, useState, useEffect } from 'react';
import { ProductType } from '../ContextTypes/ProductType';
import { InitialStateType } from '../ContextTypes/InitialStateType';
import { AppType } from '../ContextTypes/ContextAPIType';
import axios from 'axios';

const initialState = {
  products: [],
  loading: true,
  error: '',
  currentProduct: {} as ProductType,
};

export const ProductContext = createContext<InitialStateType>(initialState);

const ProductContextProvider = ({ children }: AppType) => {
  const [state, setState] = useState<InitialStateType>(initialState);
  const getProducts = async () => {
    setState({ ...state, loading: true });
    await axios
      .get<ProductType[]>('https://fakestoreapi.com/products?limit=8')
      .then((res) => {
        setState({
          products: res.data,
          loading: false,
          error: '',
          currentProduct: {} as ProductType,
        });
      });
  };

  const getProduct = async (id: string) => {
    await axios
      .get<ProductType>('https://fakestoreapi.com/products/' + id)
      .then((res) => {
        setState({
          ...state,
          loading: false,
          currentProduct: res.data,
        });
      });
  };

  return (
    <ProductContext.Provider value={{ ...state, getProducts, getProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
