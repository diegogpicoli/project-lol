import React from 'react'
import { useParams } from 'react-router-dom';
import Header from '../components/Header'
import champions from '../data/champions';
import '../style/champion.css'

function Champions() {
  const params = useParams();
  const hero = champions.find((champion) => champion.id === +params.id)
  console.log(hero)
  return (
    <div className='body'>
      <Header validation={ true } />
      <div className='champion'>
        <div className='container'>
          <img className='backgroundHero' src={hero.background} alt='' />
          <div className='heroName'>
            <p>{hero.title}</p>
            <h1>{hero.name}</h1>
            <div className='history'>
              <p>{hero.history}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Champions;
