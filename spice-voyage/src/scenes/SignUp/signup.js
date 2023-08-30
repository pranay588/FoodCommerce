import { useState } from "react";
// import {useHistory} from "react-router-dom";

export const SignUp = ()=>{
    // const history = useHistory();
    const [user,setUser] = useState({firstName:"",lastName:"",email:"",password:""});

    let name,value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({...user,[name]:value})
    }
    const PostData = async(e)=>{
        e.preventDefault();
        const { firstName,lastName,email,password } = user;
        const res = await fetch("/auth/register",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                firstName,lastName,email,password
            }),
        });
        const data = await res.json();
        if(data.status === 500 || !data)
            console.log("Invalid registration");
        else{
            console.log("registration successful");
            // history.push("/login");
        }
    }


    return(
        <div>
            <form method="POST">
                <input type="text" name="firstName" placeholder="Your first name" value={user.firstName} onChange={handleInputs}/>
                <input type="text" name="lastName" placeholder="Your last name" value={user.lastName} onChange={handleInputs}/>
                <input type="email" name="email" placeholder="Your email" value={user.email} onChange={handleInputs}/>
                <input type="password" name="password" placeholder="Your password" value={user.password} onChange={handleInputs}/>
                <input type="submit" name="signup" id="signup" value="register" onClick={PostData}/>
            </form>
        </div>
    );
}