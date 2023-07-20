/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import './dogs.css'
import { CartContext } from '../Context/CartContext';
function DogCart(props) {
    const {id,name,breed,description,imageUrl,price}=props;
    const {SetAddCart,setTotal} =useContext(CartContext)
    const [added,setAdded]=useState(false)
    const handleClick = () =>{
        setAdded(true);
        const newItem={
            name:name,
            price:price,
            imageUrl:imageUrl
        }
        SetAddCart((item)=> [...item,newItem])
        setTotal((total)=> total+=Number(price))
    }
    return (
        <>
        <section className="dogs">
            <div className="dog-info">
                <p>{name}</p>
                <p>{breed}</p>
            </div>
            <div className="dogs-img-container">
                <img src={imageUrl} alt={`picture of ${name}`} className="dog-img" />
            </div>
            <div className="dogs-desc">{description}</div>
            <div className="dogs-price">{price}$</div>
            {added ? (<button disabled className="dogs-btn-disabled">Added!</button>) 
                   :( <button className="dogs-btn" onClick={handleClick}>ADD TO CART</button>)
            }
            
        </section>
        </>
      );
}

export default DogCart;