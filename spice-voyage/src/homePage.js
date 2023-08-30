import { useEffect } from "react";
// import { Jwt } from "jsonwebtoken";
import Hero from "./components/hero/hero.js";
import Trends from "./components/Trends/trends.js"
import AboutUs from "./components/aboutUs/aboutUs.js";



const HomePage = ()=>{

    // async function populateQute(){
    //     const req = await fetch('api/quote',{
    //         headers:{
    //             'x-access-token': localStorage.getItem('token')
    //         }
    //     });
    //     const data = req.json();
    //     console.log(data);
    // }

    // useEffect(()=>{
    //     const token = localStorage.getItem('token');
    //     if(token){
    //         const user = jwt.decode(token)
    //         console.log(user)
    //         if(!user){
    //             localStorage.removeItem('token');
    //             window.location.href = '/login'
    //         }
    //         else{
    //             populateQute();
    //         }
    //     }
    // },[]);



    return(
        <div>
            <Hero/>
            <Trends/>
            <AboutUs/>
        </div>
    );
}

export default HomePage;