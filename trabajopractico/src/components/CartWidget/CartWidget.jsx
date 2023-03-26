import "./cartwidget.css"

 function CartWidget(props){
    return(
        <div className="carrito-numero"> 
            <img src={props.img} className="img-cart" alt="carrito"></img>
            <figcaption className="numero"> 0 </figcaption>
        </div>
    )
}

export default CartWidget;