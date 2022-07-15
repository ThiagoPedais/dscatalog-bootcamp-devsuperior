import React from 'react'
import ProductPrice from '../../../pages/Catalog/components/ProductPrice';
import { Product } from '../../../types/product';
// import { ReactComponent as ProductImage } from '../../../../core/assets/images/product.svg'
import './style.scss';

type Props = {
  product: Product;
}


const ProductCrudCard = ({ product }: Props) => {
  return (
    <div className="card-base border-radius-10 product-card">
      {/* <ProductImage /> */}
      <div className="card-top-container">
        <img src={product.imgUrl} alt={product.name} />
      </div>
      <div className="product-info">

        <h6 className="product-name">
          {product.name}
        </h6>

        <div className="product-price-container">
          <ProductPrice price={product.price} />
        </div>

      </div>
    </div>
  )
}

export default ProductCrudCard;