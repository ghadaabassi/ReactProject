function Reduce(){

    const numbers=[5,-2,-3,1,2,3,4,6]
    const crt=["d","d","a","e","a","e","c","s","c","e","f","m","s","f"]
  
  
//****** Reduce  
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  const product = numbers.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  }, 1);  

  const occ= crt.reduce((accumulator, currentValue) => {
    if(accumulator[currentValue]){
      accumulator[currentValue]++;
    }
    else{
      accumulator[currentValue]=1;
    }
    return accumulator;
  }, {});  

  const concat = crt.reduce((accumulator, currentValue) => {
    return accumulator .concat(currentValue);
  }, "");   

  
  return(
  
  <>
  
  <ul>
              <h2>Reduce</h2>
              <span>Somme de nombres {sum}</span><br/>
              <span>Produit de nombres {product}</span>
    
              <h3>Occurence</h3>        
             {/*Reduce Occurence*/
            Object.entries(occ).map(([element, count]) => (
              <li key={element}>
                {element}: {count}
              </li>
            ))}
    
            <span><b>Concatenated caracters:</b> {concat} </span>
              
            </ul>
    
  
  </>
  
  )  
    }
    
  
  
    export default Reduce  