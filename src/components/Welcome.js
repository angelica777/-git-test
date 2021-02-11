import React from 'react'
import './styles/Card.css'

function Welcome(props){
    return (
        <div className="container">
         <div className="Fitness-User-Info">
    <h1> Hola Cristina {props.username}!</h1>
            <p> Bienvenida a la pagina</p>
         </div>
        </div>
             
    )
} 
export default Welcome