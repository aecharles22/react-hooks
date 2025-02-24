// Lifting state
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

function Name({ onNameChange}) {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" onChange={onNameChange} />
    </div>
  )
}


function FavoriteAnimal({animal, onAnimalChange}) {
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input
        id="animal"
        value={animal}
        onChange={event => onAnimalChange(event.target.value)}
      />
    </div>
  )
}

function Display({name, animal}) {
  return <div>{`Hey ${name}, your favorite animal is: ${animal}!`}</div>
}


function App() {
  const [animal, setAnimal] = React.useState();
  const [name, setName] = React.useState('')
  return (
    <form>
      <Name onNameChange={event => setName(event.target.value)} />
      <FavoriteAnimal animal={animal} onAnimalChange={setAnimal}/>
      <Display name={name} animal={animal}/>
    </form>
  )
}

export default App
