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
const numbers=[5,-2,-7,1,2,3,4,5]

const names=["Ghada","Aya","Salah","Amine","Jack","Emilie"]
const carcters=["d","a","a","e","a","e"]

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

//****** Filters

  const filteredNames = names.filter(name => name.length < 4);
  const PositiveNumbers = numbers.filter(nmbr => nmbr>= 0);
  const filtredStudents = students.filter(gr => gr.grade>= 15);

//****** Reduce  
  const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  const product = numbers.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  }, 1);  

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
          </li>; })
        }
       </ul>
 
        <ul>
          <h2>Filter</h2>
          <h3>Names</h3>
        <li>
        {
         /*Filtred Names */
        filteredNames.map(filteredName => (
        <li key={filteredName}>{filteredName}</li>
        ))}
        </li>

        <li>
          <h3>Numbers</h3>
        {
         /*Filtred Numbers */
         PositiveNumbers.map(filteredNumber => (
        <li key={filteredNumber}>{filteredNumber}</li>
        ))}
        </li>

        <li>
          <h3>students</h3>
        {
         /*Filtred Students */
         filtredStudents.map(std => (
        <li key={std}>{std.name}</li>
        ))}
        </li>
        </ul>
        <ul>
          <h2>Reduce</h2>
          <span>Somme de nombres {sum}</span><br/>
          <span>Produit de nombres {product}</span>
          
        </ul>

     
    </>
  )
}

export default App
