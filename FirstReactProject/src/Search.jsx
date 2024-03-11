import { useState } from 'react'

const getTitle=(title)=>(title)
const  Search=({Onsearch,searchTerm})=>{

  return(
  <>
  <ul>
  <h1>React {getTitle("Project")}</h1>
      <label htmlFor='title'>Write Something here :</label>
      <input id='title' type='text'  onChange={Onsearch} /> 
      <p>Searching : {searchTerm} </p> 

  </ul>        
  </>
  )}
  
    export default Search  