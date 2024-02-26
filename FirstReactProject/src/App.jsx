import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const title="React";
function App() {
  const [count, setCount] = useState(0)
  const welcome={
    greeting:"Hey",
    title:"React",
  }
const numbers=[1,2,3,4,5]
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

  function getTitle(title){
    return title;
  }
  
  return (
    <>
      <h1>React {getTitle("Project")}</h1>
      <label htmlFor='title'>Write Somthing here :</label>
      <input id='title' type='text'/>
       <ul>
        {
          list.map(function (item) {return <li key={item.objectID}>{item.title}
          <span><br/>
            <a href={item.url}>{item.title}</a>
          </span><br/>
          <span><b>Points:  </b>{item.points}</span>
          
          </li>; })
        }
       </ul>

       <ul>
        {   numbers.filter(function (item) {
          
          return <li > {item % 2==0} <br/></li>; })
        }


       </ul>
   
      
     
    </>
  )
}

export default App
