// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

const useLocalStorageState = (key, defaultValue) => {
  const [key, setKey] = React.useState(() => window.localStorage.getItem('name') ||defaultValue);

  React.useEffect(() => {
    window.localStorage.setItem(, key)
  }, [key])

  return [name, setName];
}

function Greeting({initialName = ''}) {
  
  const [name, setName] = useLocalStorageState(initialName);

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName='Adam' />
}

export default App;
