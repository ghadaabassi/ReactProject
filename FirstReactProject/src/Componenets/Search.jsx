
const  Search=({onSearch,searchTerm})=>{
  const getTitle=(title)=>(title)
  return(
  <>
  <ul>
  <h1>React {getTitle("Project")}</h1>
      <label htmlFor='title'>Write Something here :</label>
      <input id='title' type='text'  onChange={onSearch} /> 
     { <p>Searching : {searchTerm} </p>
      }
  </ul>        
  </>
  )}
  
    export default Search  