import axios from "axios";
import { useState } from "react";

const Login = ()=>{

    const [emailId , setEmailId] = useState("");
    const [password , setPassword] = useState("");

    const setInputFields= (e :any)=>{

        if(e.target.placeholder === "Type email here"){
            setEmailId(e.target.value);
        }
        else{
            setPassword(e.target.value);
        }
    }

    const validateEmailId=(emailId : string)=>{
        // Simple regex for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(emailId);
    }

    const validatePassword=(password : string)=>{
        
        // Password validation: at least 8 characters, one uppercase, one lowercase, one number
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passwordRegex.test(password);
    }

    const makeLoginApiCall = async(emailId: string , password: string)=>{
        try{
            const res = await axios.post("http://localhost:8080/api/v1/login",{
                emailId:emailId,
                password:password
            })

            console.log("Login successful:");
        }
        catch(err){
            console.error("Error during login API call:", err);
            alert("Login failed. Please try again.");
        }
    }

    const handleLoginClick= async()=>{
        if(!validateEmailId(emailId)){
            alert("Please enter valid email");
            return;
        }
        else if(!validatePassword(password)){
            alert("Pls enter password with at least 8 characters, one uppercase, one lowercase, one number");
            return;
        }
        makeLoginApiCall(emailId, password);

    }

    return(
        <div className="card bg-base-200 w-96 shadow-xl mx-auto mt-20">
            <div className="card-body flex items-start justify-center">
            <h2 className="card-title">Login Here!</h2>
            <div>
            <fieldset className="fieldset w-100">
                <legend className="fieldset-legend">What is your email?</legend>
                <input type="text" value={emailId} onChange={setInputFields} className="input appearance-none outline-none" placeholder="Type email here" />
              
            </fieldset>

            <fieldset className="fieldset w-100">
                <legend className="fieldset-legend">What is your password?</legend>
                <input type="text" value={password} onChange={setInputFields} className="input appearance-none" placeholder="Type password here" />
             </fieldset>

            </div>

            <div className="card-actions w-80 flex align-center justify-end mt-4 ">
                <button className="btn btn-primary" onClick= {handleLoginClick}>Login</button>
            </div>
            </div>
      </div>
    )

}

export default Login;