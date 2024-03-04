import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Filter from './Filter.jsx'
import Reduce from './Reduce.jsx'

const title="React";
function App() {

  const [count, setCount] = useState(0)
  const welcome={
    greeting:"Hey",
    title:"React",
  }

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

//****** Functions
  function getTitle(title){
    return title;
  }

  return (
    <>
      <h1>React {getTitle("Project")}</h1>
      <label htmlFor='title'>Write Somthing here :</label>
      <input id='title' type='text'/>
       <ul>
        <h2>Mapping</h2>
        {
           /*Mapping */
          list.map(function (item) {return <li key={item.objectID}>{item.title}
          <span><br/>
            <a href={item.url}>{item.title}</a>
          </span><br/>
          <span><b>Points:  </b>{item.points}</span>
          </li> })
        }
       </ul>
        
        <Filter/>
        <Reduce/>

    </>
  )
}








export default App
