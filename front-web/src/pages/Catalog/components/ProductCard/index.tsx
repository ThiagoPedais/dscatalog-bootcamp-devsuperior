import React from 'react'
import { ReactComponent as ProductImage } from '../../../../core/assets/images/product.svg'
import ProductPrice from '../ProductPrice';
import './style.scss';

export default function index() {
  return (
    <div className="card-base border-radius-10 product-card">
      <ProductImage />

      <div className="product-info">
        
        <h6 className="product-name">
          Computador Desktop - Intel Core i7
        </h6>

        <div className="product-price-container">
          <ProductPrice price="2.345,00" />
        </div>

      </div>
    </div>
  )
}
