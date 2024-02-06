import "./CartStyle.css";
import { PRODUCTS } from "../../products";
import { TotalBuyingContext } from "../../context/TotalBuyingState.js";

import { useContext } from "react";
import { CartItem } from "./cart-item.js";
import { useState } from "react";
const Cart = ()=>{
    const { cartItems } = useContext(TotalBuyingContext);
    const { reset } = useContext(TotalBuyingContext); 
    let totalPrice = 0;
    for(let i in cartItems){
        if(cartItems[i] !== 0){
            totalPrice += PRODUCTS[i].price*cartItems[i];
        }
    }
    function Reset(){
        reset();
    }

    return(
        <div className ="cart">
           <div>
            <h1>
                Your Cart Items
            </h1>
           </div>
           <div className="cartItems">
                {PRODUCTS.map((product)=>{
                    if(cartItems[product.id] !== 0)
                        return <CartItem data={product}/>
                })}
           </div>
           <div className="cartItems-price">
            <h4>Total price: {totalPrice}</h4>
           </div>
           
           <div className="cart_btns"><button className="btn-theme-1">check out</button><button className="btn-theme-1" onClick={Reset}>reset</button></div>
        </div>
        
    )
};

export default Cart;