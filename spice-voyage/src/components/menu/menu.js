import "./menuStyle.css";
import { PRODUCTS } from "../../products.js";
import { Product } from "./product";
import { useContext } from "react";
const Menu = ()=>{
    return(    
        <div>
            <div className="products">
                {PRODUCTS.map((product)=>(
                    <Product data={product}/>
                ))}
            </div>
            {/* <div class="menu-container">
                
                <div class="card-1 menu-cards">
                    <img src="img1.jpg"/>
                    <p class="name">card 1</p>
                    <div class="buying">
                        <h4>starting from</h4><p>$6.99</p>
                    </div>
                </div>
                
                <div class="card-2 menu-cards">
                    <img src="img2.jpg"/>
                    <p class="name">card 2</p>
                    <div class="buying">
                        <p>$6.99</p><button>Buy Now</button>
                    </div>
                </div>
                
                <div class="card-3 menu-cards">
                    <img src="img3.jpg"/>
                    <p class="name">card 3</p>
                    <div class="buying">
                        <p>$6.99</p><button>Buy Now</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Menu;