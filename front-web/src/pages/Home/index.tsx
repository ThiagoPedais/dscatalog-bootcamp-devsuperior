import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as MainImage } from '../../core/assets/images/main-image.svg';
import Button from '../../core/components/Button';
import { hasAnyRoles, isAuthenticated } from '../../util/requests';
import './style.scss';



export default function index() {
  return (    
    <div className="home-container">
      
    <h1>{isAuthenticated() ? 'autenticado' : 'não autenticado'}</h1>
    <h1>Resultado = {hasAnyRoles(['ROLE_ADMIN']) ? 'sim' : 'não'} </h1>

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
