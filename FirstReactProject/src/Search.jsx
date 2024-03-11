import { useState } from 'react'

const getTitle=(title)=>(title)
const  Search=(props)=>{
//****** Functions

//const [value,setValue]=useState('');
/*
const handleChange=(evt)=>{
    setValue(evt.target.value);
}
*/

  return(
  <>
  <ul>
  <h1>React {getTitle("Project")}</h1>
      <label htmlFor='title'>Write Something here :</label>
      <input id='title' type='text'  onChange={props.OnSearch} /> 
      <p>Searching : {props.searchTerm} </p> 
      
  </ul>        
  </>
  )}
  
    export default Search  