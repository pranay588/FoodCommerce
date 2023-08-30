import { useContext } from "react";
import { TotalBuyingContext } from "../../context/TotalBuyingState";
import "./productStyle.css";
export const Product = (props)=>{
    const { id,productName,price,productsImage } = props.data;
    const { addToCart,cartItems } = useContext(TotalBuyingContext);
    const cartItemAmount = cartItems[id];
    return(
        <div>
            <div className = "product">
                <img src={productsImage}/>
                <div className="description">
                    <p><b>{productName}</b></p>
                    <p>${price}</p>
                </div>
                <button className="buy-btn" onClick={() => addToCart(id)}>Add to cart{cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
            </div>
        </div>
    );
}