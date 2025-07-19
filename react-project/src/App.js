
import Author from "./Author";
import Book from "./Book";

const App = ()=>{
  
  let name ="Asha";
  let age=21;
  return (
    <>
      <h1>hello,world</h1>
      <p>name :{name}</p>
      <p>age :{age}</p>

      <Book name = "React" price = "200" quantity ="20" city="delhi" pic="../reactbook.png"/>
      <Author name="Asha" age="21" rating ="5 star" />
      <Book name = "Node" price = "250" quantity ="25" city="mumbai" pic = "../nodebook.webp"/>
      <Author name="Janet" age="31" rating ="4 star" />
    </>
  )
}
export default App;