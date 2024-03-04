function Search(){
//****** Functions
const getTitle=(title)=>(title)

const handleChange=(evt)=>{

    console.log(evt.target.value);
}

  return(
  <>
  <ul>
  <h1>React {getTitle("Project")}</h1>
      <label htmlFor='title'>Write Something here :</label>
      <input id='title' type='text'  onChange={handleChange} />  
  </ul>        
  </>
  )}
  
    export default Search  