import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Filter from './Filter.jsx'
import Reduce from './Reduce.jsx'
import Search from './Search.jsx'

const title="React";
const welcome={
  greeting:"Hey",
  title:"React",
}



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
        props.list.map(function (item) {return <li key={item.objectID}>{item.title}
        <span><br/>
          <a href={item.url}>{item.title}</a>
        </span><br/>
        <span><b>Points:  </b>{item.points}</span>
        </li> })
      }
     </ul>
    )
  }
  

export default App
