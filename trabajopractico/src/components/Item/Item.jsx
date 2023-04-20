
import './Item.css'
import{Link}from 'react-router-dom'


//aca lo exporto desde la fundacion

export default function Item(props){

    return(
    
    <div className="item-card">

       <div className="item-card_header">
       <h4>{props.title}</h4>
       </div>

       <div className='item-card_img'>
       <img src={props.img} alt="imagen" />
       </div>
      
       <div>
       {props.offer && <h3 style = {{color:"red"}}> {props.offer}%</h3>}
       <h3>Precio $ {props.price}</h3>
       <small>{props.description}</small>
       </div>

       {props.stock === 0 && <small>No quedan mas pelis</small> }
       
       { props.stock > 0 &&(
          <Link to={`/detail/${props.id}`}>
          <button> Ver Detalles</button>
          </Link>
        )
       }
    </div>

    )

}

