import { useState } from "react";

export const Login = ()=>{

    const [email,setEmail] = useState(''); 
    const [password,setPassword] = useState('');
    const LoginUser = async(e)=>{
        e.preventDefault();
        const res = await fetch("/auth/login",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                email,password
            }),
        });
        const data = await res.json();
        if(res.status === 400 || !data)
            console.log("Invalid Credentials");
        else{
            console.log(data);
            localStorage.setItem('login',JSON.stringify({
                login:false,
                token:data.token
            }));
            window.location.href = './'
            console.log("Success..!");
            // let a = JSON.parse(localStorage.getItem('login'));
            // console.log(a.token);
        }   
            
    }


    return(
        <div>

            <form method="POST">
            <input type="email" name="email" placeholder="Your email" autoComplete="off" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" name="password" placeholder="Your password" autoComplete="off" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <input type="submit" name="signup" id="signup" autoComplete="off" value="Login" onClick={LoginUser}/>
            </form>

        </div>
    );
}