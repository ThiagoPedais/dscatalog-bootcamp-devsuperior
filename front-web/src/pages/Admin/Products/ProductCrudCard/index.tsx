import React from 'react'
import ProductPrice from '../../../Catalog/components/ProductPrice';
import { Product } from '../../../../types/product';
// import { ReactComponent as ProductImage } from '../../../../core/assets/images/product.svg'
import './style.scss';
import Categorybadge from '../CategoryBadge';
import { Link } from 'react-router-dom';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from '../../../../util/requests';

type Props = {
  product: Product;
  onDelete: Function;
}


const ProductCrudCard = ({ product, onDelete }: Props) => {


  const handleDelete = (productId: number) => {

    if (!window.confirm("Tem certeza que deseja deletar? ")){
      return;
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: `/products/${productId}`,
      withCredentials: true
    };

    requestBackend(config)
      .then(() => {
        onDelete();
        console.log("DELETADO ID: " + productId);
      });
  }



  return (
    <div className="card-base border-radius-10 product-crud-card">
      {/* <ProductImage /> */}
      <div className="product-crud-card-top-container">
        <img src={product.imgUrl} alt={product.name} />
      </div>
      <div className="product-crud-product-description">
        <div >

          <div className="product-crud-product-price-container">
            <h6 className="product-name">
              {product.name}
            </h6>
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
      </div>
      <div className="product-crud-card-buttons-container">

        <Link to="" >
          <button
          onClick={() => handleDelete(product.id)}
          className='btn btn-outline-danger product-crud-card-button product-crud-card-button-first'>EXCLUIR</button>
        </Link>
        <Link to={`/admin/products/${product.id}`}>
          <button className='btn btn-outline-secondary product-crud-card-button'>EDITAR</button>
        </Link>

      </div>

    </div>
  )
}

export default ProductCrudCard;