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
const numbers=[5,-2,-3,1,2,3,4,6]

const names=["Ghada","Aya","Salah","Amine","Jack","Emilie"]
const crt=["d","d","a","e","a","e","c","s","c","e","f","m","s","f"]

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


  const students=[
    {
      id:0,
      name:"stud1",
      grade:3,
    },
    {
      id:1,
      name:"stud2",
      grade:13,
    },
    {
      id:2,
      name:"stud3",
      grade:17,
    },
    {
      id:3,
      name:"stud4",
      grade:20,
    },
    {
      id:4,
      name:"stud4",
      grade:12,
    },
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
