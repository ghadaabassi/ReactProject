import { useState } from 'react'

function Search(){
//****** Functions
const getTitle=(title)=>(title)
const [value,setValue]=useState('');

const handleChange=(evt)=>{
    setValue(evt.target.value);
}
  return(
  <>
  <ul>
  <h1>React {getTitle("Project")}</h1>
      <label htmlFor='title'>Write Something here :</label>
      <input id='title' type='text'  onChange={handleChange} /> 
      <p>Searching : {value} </p> 
  </ul>        
  </>
  )}
  
    export default Search  