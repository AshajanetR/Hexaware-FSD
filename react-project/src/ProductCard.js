
const ProductCard = ({brand,category,description,image}) => {
    
  return (
    <div className="prod-card">
       <img src={image} className="image" />
       <h1>Brand : {brand}</h1>
       <h1>Category : {category}</h1>
       <p>{description}</p>
       
    </div>
  )
}

export default ProductCard;