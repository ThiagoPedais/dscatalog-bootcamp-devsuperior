import React from 'react'
import ProductPrice from '../../../Catalog/components/ProductPrice';
import { Product } from '../../../../types/product';
// import { ReactComponent as ProductImage } from '../../../../core/assets/images/product.svg'
import './style.scss';
import Categorybadge from '../CategoryBadge';

type Props = {
  product: Product;
}


const ProductCrudCard = ({ product }: Props) => {
  return (
    <div className="card-base border-radius-10 product-crud-card">
      {/* <ProductImage /> */}
      <div className="product-crud-card-top-container">
        <img src={product.imgUrl} alt={product.name} />
      </div>
      <div className="product-info">

        <h6 className="product-name">
          {product.name}
        </h6>

        <div className="product-crud-product-price-container">
          <ProductPrice price={product.price} />
        </div>

        <div className="product-crud-categories-container">

          {
            product.categories.map(category => (
              <Categorybadge name={category.name} key={category.id} />
            ))
          }

        </div>

      </div>

      <div className="product-crud-card-buttons-container">
        <button className='btn btn-outline-danger product-crud-card-button product-crud-card-button-first'>EXCLUIR</button>
        <button className='btn btn-outline-secondary product-crud-card-button'>EDITAR</button>
      </div>

    </div>
  )
}

export default ProductCrudCard;