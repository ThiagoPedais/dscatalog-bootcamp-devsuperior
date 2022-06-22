import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../../core/assets/images/arrow.svg'
import { Product } from '../../types/product';
import { BASE_URL } from '../../util/requests';
import ProductPrice from '../Catalog/components/ProductPrice';

import './style.scss'

type UrlParams = {
    productId: string;
}

const ProductDetails = () => {

    const { productId } = useParams<UrlParams>();

    const [product, setProduct] = useState<Product>();

    useEffect(() => {
        axios.get(` ${BASE_URL}/products/${productId}`)
            .then(response => {
                setProduct(response.data);
                // console.log(response.data)
            });
    }, [productId]);


    return (
        <section className="product-details-container">
            <div className="card-base product-details-card">
                <Link to="/products">
                    <div className="goback-container">
                        <ArrowIcon />
                        <h2>Voltar</h2>
                    </div>
                </Link>


                <div className="row">
                    <div className="col-xl-6">

                        <div className="img-container">
                            <img
                                src={product?.imgUrl}
                                alt={product?.name}
                            />
                        </div>

                        <div className="name-price-container">
                            <h1>{product?.name}</h1>
                            {product && <ProductPrice price={product?.price} />}
                        </div>

                    </div>
                    <div className="col-xl-6">
                        <div className="description-container">
                            <h2>Descrição do produto</h2>
                            <p>{product?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductDetails;