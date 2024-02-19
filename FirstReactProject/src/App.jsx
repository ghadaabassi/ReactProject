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

  function getTitle(title){
    return title;
  }
  
  return (
    <>
      <h1>React {getTitle("Project")}</h1>
      <img src='https://www.purina.co.uk/sites/default/files/2020-12/Cat%20Hunting%20BehavioursHERO.jpg' alt="catphoto" className='image'/>
      <ul>
        <li>Hy</li>
        <li>Hi</li>
      </ul>

      <input type='text' id="search"/>  


    </>
  )
}

export default App
