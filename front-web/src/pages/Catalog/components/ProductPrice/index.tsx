import { formatPrice } from '../../../../util/formatters';
import './style.scss';

type Props = {
    price: number
}

const ProductPrice = ({price } : Props) => {

    return (
        <div className="product-price-container">
            <span className="product-currency">R$</span>
            <h3 className="product-price">{formatPrice(price)}</h3>
        </div>
    );
}

export default ProductPrice;
