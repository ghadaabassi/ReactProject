import { useState } from 'react'
import './App.css'

import Filter from './Filter.jsx'
import Reduce from './Reduce.jsx'
import Search from './Search.jsx'


const  App=()=>{

  const list=[
    {
    title:"React",
    url:"http://reactjs.org/",
    points:4,
    objectID:0,
    num_coments:3,
    },
    {
    title:"Redux",
    url:"http://reduxjs.org/",
    num_coments:2,
    points:5,
    objectID:1,
    }
    ]
    
return(
    <>
        <Search/>
        <List list={list}/> 
        <Filter/>
        <Reduce/>
    </>
  )
}

const List=(props)=>{

    return(
      <ul>
      <h2>Mapping</h2>
      {
         /*Mapping */
        props.list.map((item) => 
      (
         <Item  key={item.objectID} item={item} />
      ))}
     </ul>
)}

  const Item=(props)=>{
    return(
      <ul>
        <li>
        <span>
          <a href={props.item.url}><b>{props.item.title}</b></a>
        </span><br/>
        <span><b>Points:  </b>{props.item.points}</span></li> 
     </ul>
    )
  }  


export default App
