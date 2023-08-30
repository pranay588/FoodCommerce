import { TotalBuyingContext } from "../../context/TotalBuyingState.js";
import { useContext } from "react";
import { PRODUCTS } from "../../products";
export const CartItem = (props)=>{
    const { id,productName,price,productsImage } = props.data;
    const { cartItems } = useContext(TotalBuyingContext);
    return(
        <div className="cartItem">
            <div className="cart-item-content"><div className="cart-img-div">
                <img src={productsImage} className="cart_img"/>
            </div>
            <div className="cart-description-div">
            <div className="cart-item-name"><h3>{productName}</h3></div>
                    <div className="item-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. </p><br/>
                        <h5>Price: </h5>{price*cartItems[id]}
                    </div>
            </div>
            </div>
        </div>
    );
}