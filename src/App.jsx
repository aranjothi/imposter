import { useState } from 'react'
import './App.css'

function App() {
  const [currentscreen, setcurrentscreen] = useState("main");

  function joingame() {
    console.log("Join Game")
    setcurrentscreen("join");
  }

  function back() {
    setcurrentscreen("main");
  }

  function creategame() {
    console.log("Create Game")
    setcurrentscreen("create");
  }
 
  return (
    <>
    <div className = "entirecontainer">
      {currentscreen === "main" ? ( /* current screen is main? */
      <div className = "impostertitlecontainer">
        <h1 style = {{marginBottom: '30px'}}>Imposter</h1>
        <div className = "joinandcreatebuttons">
          <button onClick = {joingame}>Join Game</button>
        </div>
        <div className = "joinandcreatebuttons">
          <button onClick = {creategame}>Create Game</button>
        </div>
      </div>
      ) : currentscreen === "join" ? ( /* current screen is join? */
        <div className = "backbutton">
          <button onClick = {back}>Back</button>
        </div>
      ) : currentscreen === "create" ? (
        <div className = "backbutton">
          <button onClick = {back}>Back</button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
    </>
    )
  }


export default App
