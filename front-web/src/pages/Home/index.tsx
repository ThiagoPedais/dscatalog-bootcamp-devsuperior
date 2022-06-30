import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as MainImage } from '../../core/assets/images/main-image.svg';
import Button from '../../core/components/Button';
import { getTokenData } from '../../util/requests';
import './style.scss';



export default function index() {
  return (    
    <div className="home-container">
      
    <h1>{getTokenData()?.user_name}</h1>

      <div className="base-card home-card">
        <div className="home-content-container">
          <div>
            <h1>Conheça o melhor catálogo de produtos</h1>
            <p>
              Ajudaremos você a encontrar os melhores produtos disponíveis no
              mercado.
            </p>
          </div>
          <div>
            <Link to="/products">
            <Button text="inicie agora a sua busca" />
            </Link>
          </div>
        </div>
        <div className="home-image-container">
          <MainImage />
        </div>
      </div>
    </div>
  )
}
