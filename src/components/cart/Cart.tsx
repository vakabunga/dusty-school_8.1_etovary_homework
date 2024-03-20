import React from 'react';
import { FC } from 'react';
import './Cart.css';
import { cnCart } from './Cart.classname';
import ProductPhoto from './Cart-product-photo.png';

type ProductProps = {
  productName: string;
  productPhotoAltText: string;
  productPrice: string;
  productRate: number;
  productSold: number;
}

type ProductDiscountProps = ProductProps & {
  productDiscount: number;
  productOldPrice: string;
}

type CartProps = ProductProps | ProductDiscountProps;

function isDiscountPresent (props: CartProps): props is ProductDiscountProps {
  return Object.prototype.hasOwnProperty.call(props, 'productDiscount');
}

const Cart: FC<CartProps> = (cartProps) => {
  return (
    <div className={cnCart()}>
      <div className={cnCart('ProductPhotoContainer')}>
        <img className={cnCart('ProductPhotoContainerProductPhoto')} src={ProductPhoto} alt={cartProps.productPhotoAltText} />
        {isDiscountPresent(cartProps) ? <div className={cnCart('ProductPhotoContainerProductDiscount')}>-{cartProps.productDiscount}%</div> : undefined}
      </div>
      <div className={cnCart('ProductInfo')}>
        <p className={cnCart('ProductInfoProductName')}>{cartProps.productName}</p>
        <div className={cnCart('ProductInfoProductStats')}>
          <p className={cnCart('ProductInfoProductStatsRate')}>{cartProps.productRate}⭐</p>
          <p className={cnCart('ProductInfoProductStatsSold')}>{cartProps.productSold} купили</p>
        </div>
        <p className={cnCart('ProductInfoProductPrice')}>
          {cartProps.productPrice}₽ {isDiscountPresent(cartProps) ? <span className={cnCart('ProductInfo-ProductOldPrice')}>{cartProps.productOldPrice}₽</span> : undefined}
        </p>
      </div>
    </div>
  );
}

export { Cart };
