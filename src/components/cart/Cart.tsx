import React from 'react';
import { FC } from 'react';
import './Cart.css';
import { cnCart } from './Cart.classname';
import CartProductPhoto from './Cart-product-photo.png';

type CartProps = {
  productDiscount?: number;
  productName: string;
  productOldPrice?: string;
  productPhotoAltText: string;
  productPrice: string;
  productRate: number;
  productSold: number;
}

const Cart: FC<CartProps> = ({ productPhotoAltText, productName, productRate, productSold, productPrice, productOldPrice, productDiscount }) => {
  return (
    <div className={cnCart()}>
      <div className={cnCart('Product-photo-container')}>
        <img className={cnCart('Product-photo')} src={CartProductPhoto} alt={productPhotoAltText} />
        {productDiscount ? <div className={cnCart('Product-discount')}>-{productDiscount}%</div> : undefined}
      </div>
      <div className={cnCart('Product-info')}>
        <p className={cnCart('Product-name')}>{productName}</p>
        <div className={cnCart('Product-stats')}>
          <p className={cnCart('Product-stats-Rate')}>{productRate}⭐</p>
          <p className={cnCart('Product-stats-Sold')}>{productSold} купили</p>
        </div>
        <p className={cnCart('Product-price')}>{productPrice}₽ {productOldPrice ? <span className={cnCart('Product-old-price')}>{productOldPrice}₽</span> : undefined}</p>
      </div>
    </div>
  );
}

export { Cart };
