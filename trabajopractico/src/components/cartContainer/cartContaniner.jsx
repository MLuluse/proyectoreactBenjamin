
import "./cartContainer.css";
import { useContext } from 'react'
import { cartContext } from '../../storeContext/cartContext'
import { createOrder } from '../services/firestore';
import { useNavigate } from "react-router-dom";
import FormCheckout from "./FormCheckout";


function CartContainer() {
  const context = useContext(cartContext);
  const {cart, totalItems, removeItem, totalPriceInCart, clearCart} = context;
 
  let navigate = useNavigate();

  async function handleCheckOut(userData){
    const order = {
      items : cart,
      buyer : userData,
      date : new Date(),
      total : totalPriceInCart(),
    };

    const orderId = await createOrder(order);
    navigate(`/checkout/${orderId}`);
    clearCart();
  }
  
  if (cart.length === 0)
  return (
    <div className="cart-container">
      <h1>Carrito Vacío</h1>
    </div>
  );
  //2. Desglose del carrito -> mostrar el contenido
  return (
    <div>
      <h1>Tu Carrito</h1>

      <table className="cartList">
        <thead className="cartList_head">
          <tr className="cartList_row">
            <th>Miniatura</th>
            <th>Titulo</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Quitar</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody className="background">
          {cart.map((item) => (
            <tr key={item.id} className="cartList_row">
              <td>
                <img height={50} src={item.img} alt={item.title} />
              </td>
              <td>{item.title}</td>
              <td>$ {item.price}</td>
              <td>{item.count}</td>
              <td>
                <button  onClick={()=>removeItem(item.id)}>  
                  X
                </button>
              </td>
              <th>${item.count * item.price} </th>
              
            </tr>
            
          ))}
        </tbody>
      </table>

      <div className="cartList_detail">
      <h4>Tenes un total de {totalItems()} items en tu carrito</h4>
      <h4>El total de tu compra es de ${totalPriceInCart()}</h4>
      <FormCheckout onCheckout={handleCheckOut}/>

      </div>
      
    </div>
  );





}

export default CartContainer;