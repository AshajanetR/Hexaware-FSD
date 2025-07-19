import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Apiex2 = () => {
    let [product,setProduct] = useState([]);
    
    useEffect(()=>{
        fetch("https://fakestoreapi.in/api/products")
        .then((res)=>res.json())
        .then((temp)=>setProduct(temp.products))
        .catch((err)=>console.log(err))
    },[])
    
  return (
    <div>
    {console.log(product)}
    {product.map((p)=><ProductCard key ={p.id} brand ={p.brand} category={p.category} description={p.description} image={p.image}/>)}
    </div>
  )
}

export default Apiex2;