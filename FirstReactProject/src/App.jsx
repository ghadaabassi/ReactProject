import './App.css'
import Filter from './Filter.jsx'
import Reduce from './Reduce.jsx'
import Search from './Search.jsx'
import { useState,useEffect } from 'react'


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
    },
    {
      title:"Java",
      url:"https://www.java.com/fr/",
      num_coments:4,
      points:6,
      objectID:2,
      }
    ]

const [searchTerm,setsearchTerm]= useState(localStorage.getItem('search')||'React');

useEffect(()=>
{
localStorage.setItem('search',searchTerm);
},[searchTerm]
)



const handleSearch=(event)=>{
  setsearchTerm(event.target.value);
  localStorage.setItem('search',event.target.value);
}

const searchedList=list.filter((l)=>
 l.title.toLowerCase().includes(searchTerm.toLowerCase())
);

    
return(
    <>
        <Search onSearch={handleSearch} searchTerm={searchTerm} />
        <h2>Searching</h2>
        <List list={searchedList}/> 
    </>
  )
}

const List=(props)=>{

    return(
      <ul>
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
        <span><b>Points: </b>{props.item.points}</span></li> 
     </ul>
    )
  }  


export default App
