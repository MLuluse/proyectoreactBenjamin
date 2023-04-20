import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { cartContext } from "../../storeContext/cartContext";
import { Link } from "react-router-dom";




function ItemDetail(props){
  

  const{addItem, getCountInCart} = useContext(cartContext);


  //ACA
  const [addedToCart, setAddedToCart] = useState(false);


  function onAddToCart(count){
    setAddedToCart (count);
  
    addItem(props, count)
    //ACA
  }
  const countInCart = getCountInCart(props.id);
  console.log(countInCart);


    return(
    <div className="item-card">
       <div className="item-card_header">
       <h4>{props.title}</h4>
       </div>
       <img src={props.img} alt="imagen" />
       <h3>{props.category}</h3>
       <h3>Precio: ${props.price}</h3>
       <h5>{props.description}</h5>
      
       {addedToCart ? 
         <Link to="/cart"> <button> Ir al carrito </button> </Link> 
        : <ItemCount onAddToCart={onAddToCart} stock={props.stock}/>}
     
       
    </div>
    )

}

export default ItemDetail;