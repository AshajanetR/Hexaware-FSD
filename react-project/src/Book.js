import "./App.css";
const Book = ({name,price,quantity,city,pic})=>{
     return (
        <div className="cont">
        <img src={pic} className="image"/>
            <h1>{name}</h1>
            <h2>Price : {price}</h2>
            <h3>Quantity : {quantity}</h3>
            <h4>City : {city}</h4>
        </div>
     )
}

export default Book;