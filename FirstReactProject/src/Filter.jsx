const Filter=()=>{

    const numbers=[5,-2,-3,1,2,3,4,6]
  
    const names=["Ghada","Aya","Salah","Amine","Jack","Emilie"]
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
  
  
  //****** Filters
  const filteredNames = names.filter(name => name.length < 4);
  const PositiveNumbers = numbers.filter(nmbr => nmbr>= 0);
  const filtredStudents = students.filter(gr => gr.grade>= 15);
  
  return(
  <>
  <ul>
              <h2>Filter</h2>
              <h4>Names</h4>
            {
             /*Filtred Names */
            filteredNames.map(filteredName => (
            <li key={filteredName}>{filteredName}</li>
            ))}
           
              <h4>Numbers</h4>
            {
             /*Filtred Numbers */
             PositiveNumbers.map(filteredNumber => (
            <li key={filteredNumber}>{filteredNumber}</li>
            ))}
           
              <h3>students</h3>
            {
             /*Filtred Students */
             filtredStudents.map(std => (
            <li key={std.id}>{std.name}</li>
            ))}
           
            </ul>       
  </>
  )}
  
    export default Filter  