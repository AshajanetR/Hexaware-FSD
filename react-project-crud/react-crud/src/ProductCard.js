import "./App.css"

const ProductCard = ({thumbnail,title,price,category}) => {
  return (
    <div className="prod-cont">
        <img src={thumbnail} alt="prod-img" />
        <h1>Title : {title}</h1>
        <p>Price : {price}</p>
        <p>Category : {category}</p>
    </div>
  )
}

export default ProductCard;