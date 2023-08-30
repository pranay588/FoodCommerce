
import {createContext,useState} from "react";
import { PRODUCTS } from "../products";

export const TotalBuyingContext = createContext(null);
const getDefaultcart = ()=>{
    let cart = {};
    for(let i=1;i<PRODUCTS.length+1;i++){
        cart[i] = 0;
    }
    return cart;
};

const TotalBuyingState = (props)=>{
    const [cartItems,setCartItems] = useState(getDefaultcart());
    
    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId] + 1}));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId] - 1}));
    };

    const contextValue = {cartItems,addToCart,removeFromCart};
    return(
        <TotalBuyingContext.Provider value={contextValue}>
            {props.children}
        </TotalBuyingContext.Provider>
    );
}

export default TotalBuyingState;