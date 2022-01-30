import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ProductContextProvider from './Context/ProductContext';
import DrawerContextProvider from './Context/DrawerContext';
import CartContextProvider from './Context/CartContext';


ReactDOM.render(
  <CartContextProvider>
    <ProductContextProvider>
      <DrawerContextProvider>
        <App />
      </DrawerContextProvider>
    </ProductContextProvider>
  </CartContextProvider>,
  document.getElementById('root')
);
