import { ReactComponent as SearchIcon } from '../../../core/assets/images/arrow-search.svg'


import './styles.scss'

export default function ProductFilter() {
    return (
        <>
            <div className="card-base product-filter-container">
                <form className="product-filter-form">
                    <div className="product-filter-name-container">
                        <input type="text"
                            className="form-control"
                            placeholder="Nome do produto"
                        />
                        <SearchIcon />
                    </div>

                    <div className="product-filter-bottom-container">
                        <div className="product-filter-category-container">
                            <select name="" id="" >
                                <option>Livros</option>
                            </select>
                        </div>
                        <button className="btn btn-outline-secondary">LIMPAR</button>
                    </div>

                </form>
            </div>
        </>
    )
}
