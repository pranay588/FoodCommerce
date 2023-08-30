import "./CartStyle.css";
import { PRODUCTS } from "../../products";
import { TotalBuyingContext } from "../../context/TotalBuyingState.js";
import { useContext } from "react";
import { CartItem } from "./cart-item.js";
import { useState } from "react";
const Cart = ()=>{
    const { cartItems } = useContext(TotalBuyingContext);
    const [count,setCount] = useState(0);
    // function totalValue(){
    //     for(let i=0;i<cartItems.len;i++){
    //         total = total + (cartItems[i]*PRODUCTS[i].price);
    //     }
        
    // }
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
            <h4>Total price:</h4>
           </div>
           
           <div className="cart_btns"><button className="cart_btn_1">check out</button><button className="cart_btn_1">reset</button></div>
        </div>
        
    )
};

export default Cart;