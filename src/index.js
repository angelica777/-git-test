import React from 'react';
import ReactDOM from 'react-dom';
import Exercises from './pages/Exercises'
import App2 from './components/App2'
import 'bootstrap/dist/css/bootstrap.css';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

/*const user= {
  firstName:'Angelica',
  lastName: 'Paladin',
  avatar : 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png'

}

 function getName(user){
  return `${user.firstName} ${user.lastName}`
}

function getGreeting(user){
if(user){
return <h1> Hola {getName(user)}</h1>

} return <h1>Hola Stranger </h1>
}

const name='Angrli';
//const element = <img  src={user.avatar}> Hola {getName(user)} </h1>
//const element = <img  src={user.avatar} /> 

const element =(
  <div>
    <h1>{getGreeting(user)}</h1>
    <img src={user.avatar}/>
  </div>
)    //funciona bien el codigo */

const container = document.getElementById('root')
ReactDOM.render(<App2/>, container)
/* ReactDOM.render(<div>
  <Welcome
  username="Raul"
  />  */



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
