import ItemCount from "../ItemCounter/ItemCounter";


function ItemDetail(props){
    return(
    <div className="item-card">
       <div className="item-card_header">
       <h4>{props.title}</h4>
       </div>
       <img src={props.img} alt="imagen" />
       <h3>Precio: ${props.price}</h3>
       <h4>{props.category}</h4>
       <h5>{props.description}</h5>
       <ItemCount stock={10} />
       <button> Comprar </button>

    </div>
    )

}

export default ItemDetail;