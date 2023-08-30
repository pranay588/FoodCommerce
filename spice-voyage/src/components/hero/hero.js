import './hero.css';
import HeroImg from "../../assets/Hero_crop.png";
import { useLocation,useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
const Hero = () => {
    
    // useEffect(async(req,res)=>{
    //     let localToken = JSON.parse(localStorage.getItem('login'));
    //     const req = await fetch('localhost:3001/auth/posts',{
    //         method:"GET",
    //         headers:{
    //             "Content-type": "application/json",
    //             "Authorization": `Bearer ${localToken.token}`
    //         }
    //     });
    //     const data = await res.json();
    //     if(!data)
    //         console.log("Something went wrong :(");
    //     console.log(data);
    // },[]);

    // async function UserDetails(){
    //     let localToken = JSON.parse(localStorage.getItem('login'));
    //     const req = await fetch('localhost:3001/auth/posts',{
    //         method:"GET",
    //         headers:{
    //             "Content-type": "application/json",
    //             "Authorization": `Bearer ${localToken.token}`
    //         }
    //     });
    //     const data = await res.json();
    //     if(!data)
    //         console.log("Something went wrong :(");
    //     console.log(data);
    // }
    


    return(
        <section className="main-section">
            {/* <h2>Hello {userName}</h2> */}
            <div className="hero-section">
                <h1 className="Hero-title">Spice Voyage</h1>
                <p className="Hero-description">Unleash your gastronomic desires.</p>
                <button className="btn">Order Now</button>
        
                 <img className="Hero-img"src={HeroImg}/>
            </div>
            
        </section>
    )
}

export default Hero;