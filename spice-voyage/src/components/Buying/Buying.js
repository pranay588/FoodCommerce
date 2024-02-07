import React from "react";
import { useState } from "react";
import { useContext } from "react";
import TotalBuyingContext from "../../context/TotalBuyingContext";
import "./Style.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";

const Buying = ()=>{
    const a = useContext(TotalBuyingContext);
    const [count,setCount] = useState(1);

    function increment(){
        setCount(count + 1);
    }
    function decrement(){
        if(count > 1)
            setCount(count - 1);
    }
    a.Quantity = count;
    return(
        <div>
            <div className="img-container">
                <img src={img1}/>
                <div className="img-container-2">
                    <img src={img2}/>
                    <img src={img3}/>
                </div>
            </div>
            <div className="placing-order">
                <h2>The Dish one</h2>
                <div className="placing-order-pt1">
                    <button className="adding" onClick={increment}>+</button><span className="total-value">{count}</span><button className="substracting" onClick={decrement}>-</button>
                </div>
                <button className="add-to-cart">Add to Cart</button>
            </div>
            <div className = "related-header">
                <h2>Related</h2>
            </div>
        
            <div className = "related">
            <div class="card-1 cards">
                <img src={img2}/>
                <p class="name">card 2</p>
                <div class="buying">
                    <p>$6.99</p><button>Add</button>
                </div>
            </div>

            <div class="card-1 cards">
                <img src={img2}/>
                <p class="name">card 2</p>
                <div class="buying">
                    <p>$6.99</p><button>Add</button>
                </div>
            </div>
            </div>
            

        </div>
    );
}

export default Buying;