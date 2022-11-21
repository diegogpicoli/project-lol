import React from 'react'
import '../style/card.css';
import { useNavigate } from 'react-router-dom';


function Card({ champion }) {
  const navigate = useNavigate();
  return (
          <div 
            onClick={ () => navigate(`/${champion.id}`)}
            className='divCard'>
            <div className='cards'>
              <img className='imagem' src={ champion.photo } alt="" />
              <h1 className='name'>{ champion.name }</h1>
            </div>
          </div>
          )
}

export default Card;
