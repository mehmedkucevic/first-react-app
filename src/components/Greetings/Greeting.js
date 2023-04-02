import React from "react"
import "./Greeting.css"

function Greeting(props){
    console.log(props)
    return(
        <div className="main">
      <h1>Dobro dosli u {props.appName}!</h1>
      <h3>Hvala sto ste nas posetili, {props.username} </h3>
      </div>
    )
}

export default Greeting