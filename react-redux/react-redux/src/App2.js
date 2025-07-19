import { useSelector } from "react-redux"
 
const App2=()=>
{
 
 
 
  const {dsa,java}= useSelector((state)=>state.book)
 
 
    return(<>
   
   <h1> Java Book {java}</h1>
      <h1> DSA Book {dsa}</h1>
 
   
   
    </>)
}
 
export default App2;
 