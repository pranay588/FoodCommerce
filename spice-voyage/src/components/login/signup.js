import { useEffect,useState } from 'reat';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';

function SignUp(){

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:3000/signup",{
                email,password
            })
        }catch(err){
            console.log(e);
        }
    }

    return(
        <div className="login">
        <h1>Login</h1>
        <form action="POST">
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholdername="email" id=""/>
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholdername="password" id=""/>
            <input type="submit" onClick={submit}/>
        </form>
        <br/>
        <p>OR</p>
        <br/>
        <Link to="/sign">login</Link>

    </div>
    );

    
}

export default SignUp;