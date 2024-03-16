import React from 'react';
import './App.css';
import { Cart } from './components/cart/Cart';

const product = {
  productDiscont: undefined,
  productName: 'Портативная Медицинская Сумка',
  productOldPrice: undefined,
  productPhotoAltText: 'Портативная Медицинская Сумка',
  productPrice: '1450',
  productRate: 4.7,
  productSold: 123,
};

const App = () => {
  return (
    <div className="App">
      <Cart
        productDiscount={product.productDiscont}
        productName={product.productName}
        productOldPrice={product.productOldPrice}
        productPhotoAltText={product.productPhotoAltText}
        productPrice={product.productPrice}
        productRate={product.productRate}
        productSold={product.productSold}
      />
    </div>
  );
};

export { App };
