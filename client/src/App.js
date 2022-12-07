
import { useState } from 'react';
import './App.css';
import { Form } from './component/Form';
import robot from './assets/toyrobot.png'
function App() {
 const[name,setName]=useState("")
 const[gift,setGift]=useState(false)
 
 console.log("Gift:",gift)
  return (
    <div className="App">
     <Form
      name={name}
      setName={setName}
      gift={gift}
      setGift={setGift}/>
     
      {gift&&<div><h2>Congratulations Here's your Robot ,Enjoy!!</h2>
        <img src={robot} alt="robot"/></div>}    
    </div>
    
  );
}

export default App;
