import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import './cart.css'
import { useNavigate } from "react-router-dom";
function Cart() {
    const {cart,total,SetAddCart,setTotal} =useContext(CartContext)
    const handleCheckout = ( ) =>{
        SetAddCart([{}]);
        setTotal(0);
    }
    const navigate=useNavigate()
    const handleHome = () =>{
        navigate('/');
    }
    return (
        <>
            <section className="cart-container">
                <div className="cart-header">Checkout:</div>
                <div className="cart-items">
                    {cart.slice(1).map((item)=>{
                        return(
                            <div className="cart-item">
                                <img className="cart-item-img" src={item.imageUrl} alt="" />
                                {item.name}:{item.price}$
                            </div>
                        )
                    })}
                    <div className="cart-total">Total:{total}$</div>
                </div>
                <button className="cart-checkout" onClick={handleCheckout}>Buy</button>
                <button className="cart-gohome" onClick={handleHome}>Go home</button>
            </section>
        </>
      );
}

export default Cart;