import { useEffect, useState } from "react";


const App1 = () => {

    let [products,setproducts] = useState([]);

    useEffect(()=>{
         fetch("https://official-joke-api.appspot.com/random_ten")
         .then((res)=>res.json())
         .then((temp)=>setproducts(temp))
         .catch((err)=>console.log(err))
    },[])

  return (
    <div>
       {products.map((product)=><h1 key={product.id}>{product.setup}</h1>)}
    </div>
  )
}

export default App1;