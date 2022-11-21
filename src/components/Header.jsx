import { React, useState } from 'react'
import '../style/header.css'

function Header({ filtraName, validation }) {
  const [name, setName] = useState();

  return (
      <div className='header'>
        <h1>Champions League of Legends</h1>
        { !validation ? <div className='input'>
          <input onChange={ ({ target: { value } }) => setName(value) } type="text" />
          <button onClick={ () => {
            if (name !== ''){
              filtraName(name)
            } else {
              filtraName('')
            }
            }}>Pesquisar</button>
        </div> : <button className='inicio' ><a href="/">INICIO</a></button>}
      </div>
  )
}

export default Header