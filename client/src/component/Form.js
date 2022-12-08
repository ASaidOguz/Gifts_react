import React from 'react'
import axios from 'axios';
import { Buffer } from "buffer/";
window.Buffer = window.Buffer || Buffer;
const MerkleTree = require('../utils/MerkleTree');
const niceList = require('../utils/niceList');
export function Form({name,setName,gift,setGift}){
    const setValue = (setter) => (evt) => setter(evt.target.value);
    const serverUrl = 'http://localhost:1225';
    const send=async(evt)=>{
      
      evt.preventDefault()
      
      const merkleTree = new MerkleTree(niceList);

      // get the root
      const root = merkleTree.getRoot();
      console.log("Merkle Tree Root: ",root)
      const index = niceList.findIndex(n => n === name );
      const proof = merkleTree.getProof(index);
      console.log("name:",name)
      console.log("Proof:",proof)
        const { data: giftsend } = await axios.post(`${serverUrl}/gift`, {
            proof,
            name
            });
            
            console.log("Gift:",giftsend)
            setGift(giftsend)
          
            
    }
    
    return (
    <form className="container transfer" onSubmit={send}>
    <h1>Send Your Name for Verification</h1>

    <label>Your Name 
      <input
        placeholder="name..."
        value={name}
        onChange={setValue(setName)}
      ></input>
    </label>
    <input type="submit" className="button" value="Send Name" />
  </form>
  )
}
