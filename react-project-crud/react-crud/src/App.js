import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./App.css";
const App = () => {
  let [products,setProducts] = useState([]);
  let [search,setSearch] = useState("");
  let [FProducts,setFProducts] = useState([]);

  let [title,setTitle] = useState("");
  let [category,setCategory] = useState("");
  let [price,setPrice] = useState("");
  let [url,setUrl] = useState("");

  useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then((res)=>(res.json()))
    .then((temp)=>setProducts(temp.products))
    .catch((err)=>console.log(err))
  },[])
  
  useEffect(()=>{
    let data = products.filter((prod)=>{
      if(prod.category.includes(search) || (prod.title.includes(search))){
        return prod;
      }
    });
    setFProducts(data)
  },[search])
 

  const handleSearch = (e)=>{
    setSearch(e.target.value);
  }
 
  const handleCreate =(e)=>{ 
    if(title === "" || category=== "" || price=== ""){
      alert("all fields are required");
          return;
    }
       let newProduct = {
        id:products.length+1,
        title,
        category,
        price,
        thumbnail:url
       }
       console.log(newProduct)
       setProducts([...products,newProduct])
       console.log(products);

       setTitle("");
       setCategory("");
       setPrice("");
       setUrl("");
  }
  
  
  return (
    <>
    <div className="cont">
            <input type="text" placeholder="enter category to search" onChange={handleSearch} className="search"/>
            <div className="prod-cont">
              <input type="text" placeholder="enter title" onChange={(e)=>{setTitle(e.target.value)}}/>
              <input type="text" placeholder="enter categorty" onChange={(e)=>{setCategory(e.target.value)}}/>
              <input type="text" placeholder="enter price" onChange={(e)=>{setPrice(e.target.value)}}/>
              <input type="text" placeholder="enter url" onChange={(e)=>{setUrl(e.target.value)}}/>
              <button onClick={handleCreate}>Add Item</button>
            </div>
            {
              search.length >0  ?
                    FProducts.map((product)=><ProductCard 
                      key = {product.id}
                      thumbnail = {product.thumbnail}
                      title = {product.title}
                      price = {product.price}
                      category ={product.category}
                  />) 
                  : 
                  products.map((product)=><ProductCard 
                      key = {product.id}
                      thumbnail = {product.thumbnail}
                      title = {product.title}
                      price = {product.price}
                      category ={product.category}
                  />)
            }
      </div>  
    </>
    
  )
}

export default App;