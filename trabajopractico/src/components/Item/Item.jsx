
import './Item.css'
import{Link}from 'react-router-dom'

//aca lo exporto desde la fundacion

export default function Item(props){
    return(
    
    <div id={props.id} className="item-card">

       <div className="item-card_header">
       <h4>{props.title}</h4>
       </div>

       <div className='item-card_img'>
       <img className='imgcard' src={props.img} alt="imagen" />
       </div>

       <h3>{props.price}</h3>
       <small>{props.description}</small>
       <br />
       <Link to={`/detail/${props.id}`}>
       <button>Detalles</button>
       </Link>
    
    </div>

    )

}

