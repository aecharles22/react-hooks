// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

const useLocalStorageState = (defaultValue) => {
  const [name, setName] = React.useState(() => window.localStorage.getItem('name'));

  React.useEffect(() => {
    window.localStorage.setItem('local', name)
  }, [name])
  return 
}
function Greeting({initialName = ''}) {
  
  const [name, setName] = useLocalStorageState();

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
