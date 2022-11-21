import {React, useState } from 'react'
import Cards from '../components/Cards'
import Header from '../components/Header'
import '../style/home.css'

function Home() {
  const [name, setState] = useState(undefined);

  const filtraName = (name) => {
    setState(name)
  }
  return (
    <div>
      <Header filtraName={ filtraName } validation={ false }/>
      <Cards name={ name } />
    </div>
  )
}

export default Home