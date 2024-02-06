import "./header.css";
import { Link,NavLink } from "react-router-dom";
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

    const [navi,setNavi] = useState(true);

    const changeNav = ()=>{
        setNavi(!navi);
    }

    return(
        <div>
            <div className="Nav-bar">
                <NavLink className="toggle-nav-button" onClick={changeNav}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </NavLink>
                <div className= {navi ? "Nav-bar-components" : "Nav-bar-components active"}>
                    <ul className="nav-ul">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/cart">Cart</NavLink></li>
                        <li><NavLink to="/menu">Menu</NavLink></li>
                        <li><NavLink to="/signUp">Signup</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
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