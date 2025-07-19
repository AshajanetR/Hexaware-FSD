import { useState } from "react";
import BCard from "./Components/BCard";
import { MyContext } from "./MyContext";


const App = () => {
  let [age,setage] = useState(21);
  let[name,setname]=useState("asha")
  return (
    <>
      <MyContext.Provider value={{age,name}}>
          <BCard />
      </MyContext.Provider>
    </>
  )
}

export default App;