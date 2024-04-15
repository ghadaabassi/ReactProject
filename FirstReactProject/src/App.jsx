import './App.css'
import Search from './Componenets/Search.jsx'
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
      },

    /*  {
        
        title:"Json",
        url:"https://www.java.com/fr/",
        num_coments:4,
        points:6,
        objectID:3,
        },
        {
        title:"Flutter",
          url:"https://www",
          num_coments:4,
          points:6,
          objectID:4,
          },
          {
            title:"SpringBoot",
            url:"https://www",
            num_coments:4,
            points:9,
            objectID:5,
          },
          {
            title:"JSX",
            url:"https:",
            num_coments:4,
            points:4,
            objectID:6,
            }
*/ ]

const [searchTerm,setsearchTerm]= useState(localStorage.getItem('search')||'React');
const [stories, setStories] = useState(list);

const handleRemoveStory = (item) => {
  const newStories = stories.filter(
  (story) => item.objectID !== story.objectID
  );
  setStories(newStories);
  };

useEffect(()=>
{
localStorage.setItem('search',searchTerm);
},[searchTerm]
)

const handleSearch=(event)=>{
  setsearchTerm(event.target.value);
  console.log("Target: "+event.target.value);
  console.log("search:"+searchTerm);
}

const searchedList=list.filter((l)=>
 l.title.toLowerCase().includes(searchTerm.toLowerCase())
);
    /* <Search onSearch={handleSearch} searchTerm={searchTerm} />*/
return(
    <>
        <InputWithLabel
        id="search"
        value={searchTerm}
        onInputChange={handleSearch}
        >
        <strong>Search:</strong>
        </InputWithLabel>
       <p>Searching : {searchTerm} </p> 
        <h2>Searching</h2>
        <List list={searchedList}/> 
        <List list={searchedList} onRemoveItem={handleRemoveStory} />
    </>
  )
}

const List = ({ list, onRemoveItem }) => (
  <ul>
  {list.map((item) => (
  <Item
  key={item.objectID}
  item={item}
  onRemoveItem={onRemoveItem}
  />
  ))}
  </ul>
 );

 const Item = ({ item, onRemoveItem }) => {
  const handleRemoveItem = () => {
   onRemoveItem(item);
  };
  return (
   <li>
   <span>
   <a href={item.url}>{item.title}</a>
   </span>
   <span>{item.author}</span>
   <span>{item.num_comments}</span>
   <span>{item.points}</span>
   <span>
   <button 
    type='button'
    onClick={() => {
    onRemoveItem(item);
    }}
    >  
   Dismiss
   </button>
   </span>
  </li>);
  };
   


/*
  const InputWithLabel = ({ 
    id, 
   label,
    value, 
    onInputChange
    }) => (
    <>
    <label htmlFor={id}>{label}</label>
    &nbsp;
    <input
    id={id}
    type="text"
    value={value}
    onChange={onInputChange}
    />
    </>
   );
*/

/*
const InputWithLabel = ({ 
 id, 
 label, 
 value,
 type = 'text', 
 onInputChange
 }) => (
 <>
 <label htmlFor={id}>{label}</label>
 &nbsp;
 <input
 id={id}
 type={type} 
 value={value}
 onChange={onInputChange}
 />
 </>
);*/

const InputWithLabel = ({ 
  id, 
  value,
  type = 'text', 
  onInputChange,
 children,
  }) => (
  <>
  <label htmlFor={id}>{children}</label>
  &nbsp;
  <input
  id={id}
  type={type} 
  value={value}
  onChange={onInputChange}
  />
  </>
 );


export default App
