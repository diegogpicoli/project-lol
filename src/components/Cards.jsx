import { useEffect } from 'react';
import {React, useState } from 'react'
import champions from '../data/champions'
import Card from './Card';

function Cards({ name }) {
  const [championsState, setChampionsState ] = useState([]);
  const [verifica, setVerifica] = useState(true)
  useEffect(() => {
    if ( name !== undefined) {
      const newChampions = champions.filter((champion) => champion.name.toLowerCase().includes(name.toLowerCase()))
      if (newChampions.length > 0) {
        setChampionsState(newChampions)
        setVerifica(true)
      } else {
        setVerifica(false)
      }
    } else {
      const newChampions = champions
      setChampionsState(newChampions)
    }
  }, [name]);

  console.log(name)
  return (
    <div className='container'>
     { verifica ? championsState.map((champion, index) => (
        <Card key={ index } champion={ champion }/>
     )) : <h1>Campeão não encontrado...</h1>}
    </div>
  )
}

export default Cards