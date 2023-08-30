import "./header.css";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

const Header = () =>{
    const [theme,setTheme] = useState("light-theme");
    const toggleTheme = ()=>{
        if(theme === "dark-theme")
            setTheme("light-theme");
        else    
            setTheme("dark-theme");
    }

    useEffect(()=>{
        document.body.className = theme;
    },[theme]);
    return(
        <div>
            <div className="Nav-bar">
                <div className="Nav-bar-components">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/cart">cart</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/signUp">SignUp?</Link></li>
                        <li><Link to="/login">login</Link></li>
                          
                        {/* <li><Link to="/buying">buying</Link></li>
                        <li><Link to="/cart">cart</Link></li> */}
                    </ul>
                </div>
                <div>
                    <button className="dark-mode" onClick={()=>toggleTheme()}>
                        Dark Mode
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header;