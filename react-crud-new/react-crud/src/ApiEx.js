import { useEffect, useState } from "react";
import Card from "./Components/Card";
import SCard from "./Components/SCard";
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import {
  ModalHeader,
  ModalDescription,
  ModalContent,
  ModalActions,
  Button,
  Header,
  Modal,
} from 'semantic-ui-react'
const ApiEx = () => {

    let [products,setProducts] = useState([]);
    let [fproducts,setfproducts] = useState([]);
    let [title,setTitle] = useState("");
    let [category,setcategory] = useState("");
    let [url,seturl] = useState("");
    let[search,setsearch]=useState("");
    let [flag,setflag] = useState(false);
    const [open, setOpen] = useState(false)
    let [newtitle,setnewtitle] =useState("");
    let [newcategory,setnewcategory] = useState("");
    let [Id,setId] = useState("");

    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then((res)=>res.json())
        .then((temp)=>{
            setProducts(temp.products);
            setflag(true);
        }) 
        .catch((err)=>console.log(err))
    },[])

    useEffect(()=>{
        let data = products.filter((prod)=>prod.category.includes(search));
        setfproducts(data);
    },[search])

    const handleAdd = ()=>{
        let newProduct = {
            id:products.length+1,
            title:title,
            category:category,
            thumbnail:url
        }

        setProducts([...products,newProduct]);

        setTitle("");
        setcategory("");
        seturl("");
    }

    const Removedata=(id)=>{
        setProducts(products.filter((p)=>p.id!=id))
        setfproducts(fproducts.filter((p)=>p.id!=id))
    }

    const updateCategory = (id,newcategory)=>{
         setProducts(
            products.map((product) =>
            product.id ==id ? { ...product, category: newcategory } : product
         ));

        setfproducts(
            fproducts.map((product) =>
            product.id ==id ? { ...product, category: newcategory } : product
         ));

    }
    const handleupdate = ()=>{
        let f =false;
         let data =products.map((p)=>{
            if(p.id == Id){
                f=true
              if(newtitle!="") p.title=newtitle
              if(newcategory!="") p.category = newcategory
              return p;
            }
            return p;
         })
         if(f==false) alert("no such product")
         setProducts(data)
         setOpen(false)

    }

  return (
    <div>
        <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Show Modal</Button>}
        >
            <input type="text" required placeholder="enter id" onChange={(e)=>setId(e.target.value)}/>
            <input type="text" required placeholder="enter title" onChange={(e)=>setnewtitle(e.target.value)}/>
            <input type="text" required placeholder="enter category" onChange={(e)=>setnewcategory(e.target.value)}/>
            <button onClick={handleupdate}>update</button>
            <button onClick={()=>setOpen(false)}>cancel</button>
        </Modal>



    <div >
        <input type="text" placeholder="enter value to search" onChange={(e)=>setsearch(e.target.value)}/>
    </div>
    <div >
        <input type="text" required placeholder="enter title" onChange={(e)=>setTitle(e.target.value)}/>
        <input type="text" required placeholder="enter category" onChange={(e)=>setcategory(e.target.value)}/>
        <input type="text" required placeholder="enter url" onChange={(e)=>seturl(e.target.value)}/>
        <button onClick={handleAdd}>Add User</button>
    </div>

    {
        flag ? search ? 
       fproducts.map((product)=><SCard key ={product.id} title ={product.title} image = {product.thumbnail} category = {product.category} id={product.id} removeData={Removedata} 
       updateCategory={updateCategory}/>)
       :
       products.map((product)=><SCard key ={product.id} title ={product.title} image = {product.thumbnail} category = {product.category} id={product.id} removeData={Removedata} 
       updateCategory={updateCategory} />) :
       <div>
            <Segment>
                <Dimmer active>
                    <Loader>Loading</Loader>
                </Dimmer>
 
                <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
            </Segment>
       </div>
    }
    </div>
  )
}

export default ApiEx;