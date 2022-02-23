// useEffect: HTTP requests
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import { PokemonForm, fetchPokemon, PokemonInfoFallback, PokemonDataView } from '../pokemon'

function ErrorBoundary() {
  const [error, setError] = React.useState({hasError: false})

  static getDerivedStateFromError(error){
    return {}
  }
  if (error.hasError){
    return (
      <h1>Something went wrong</h1>
    )
  }
}

function PokemonInfo({pokemonName}) {
  const [state, setState] = React.useState({status: 'idle', pokemon: null, error: null})
  const {status, pokemon, error} = state

  React.useEffect(() => {
    if (!pokemonName) {
      return
    }
    setState({status: 'pending'})
    fetchPokemon(pokemonName)
    .then(pokemonData => {
      setState({status: 'resolved', pokemon: pokemonData})
    })
    .catch(error => {
      setState({status: 'rejected', error: error})
    })
  },[pokemonName])

  if (status === 'idle') {
    return 'Submit a pokemon'
  } else if (status === 'pending') {
    return <PokemonInfoFallback name={pokemonName}/>
  } else if (status === 'rejected') {
    throw error
    return (
      <div role="alert">
        There was an error: <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
      </div>
    )
  } else if (status === 'resolved') {
    return <PokemonDataView pokemon={pokemon}/>
  }

  throw new Error('This should be impossible')
}

function App() {
  const [pokemonName, setPokemonName] = React.useState('')

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName)
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        <PokemonInfo pokemonName={pokemonName} />
      </div>
    </div>
  )
}

export default App
