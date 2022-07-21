import { AxiosRequestConfig } from "axios";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import Pagination from "../../../../core/components/Pagination";
import ProductFilter from "../../../../core/components/ProductFilter";
import { Product } from "../../../../types/product";
import { SpringPage } from "../../../../types/vendor/spring";
import { requestBackend } from "../../../../util/requests";
import ProductCrudCard from "../ProductCrudCard"
import "./styles.scss"


type ControlCompomentsData = {
    activePage: number;
}

export default function List() {


    const [page, setPage] = useState<SpringPage<Product>>();
    const [controlCompomentsData, setControlCompomentsData] = useState<ControlCompomentsData>(
        {
            activePage: 0
        }
    );



    const handlePageChange = (pageNumber: number) => {
        setControlCompomentsData({ activePage: pageNumber });
    };

    const getProducts = useCallback(() => {
        const config: AxiosRequestConfig = {
            method: 'GET',
            url: `/products`,
            params: {
                page: controlCompomentsData.activePage,
                size: 5,
            }
        }

        requestBackend(config)
            .then(response => {
                setPage(response.data);
            });
    }, [controlCompomentsData])

    useEffect(() => {
        getProducts()
    }, [getProducts])


    return (
        <div className="product-crud-container">
            <div className="product-crud-bar-container">
                <Link to="/admin/products/create">
                    <button className="btn btn-primary text-white btn-crud-add">ADICIONAR</button>
                </Link>
                <ProductFilter />
            </div>
            

            <div className="row">

                {
                    page?.content.map(product => (
                        <div key={product.id} className="col-sm-6 col-md-12">
                            <ProductCrudCard
                                product={product}
                                onDelete={() => { getProducts() }}
                            />
                        </div>
                    ))
                }

            </div>

            <Pagination
                pageCount={(page) ? page.totalPages : 0}
                range={3}
                onChange={handlePageChange}
            />

        </div>
    )
}
