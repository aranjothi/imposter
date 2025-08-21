import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  function joingame() {
    console.log("Join Game")
  }

  function creategame() {
    console.log("Create Game")
  }
 
  return (
    <>
    <div className = "entirecontainer">
      <div className = "impostertitlecontainer">
        <h1 style = {{marginBottom: '30px'}}>Imposter</h1>
        <div className = "joinandcreatebuttons">
          <button onClick = {joingame}>Join Game</button>
        </div>
        <div className = "joinandcreatebuttons">
          <button onClick = {creategame}>Create Game</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
