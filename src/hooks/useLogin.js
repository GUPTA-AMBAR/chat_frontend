import axios from "axios";
import { useAuthContext } from "../authContext/authContext";
import { useState } from "react";
import toast from "react-hot-toast";

const UseLogin = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthuser} = useAuthContext();

    const uselogin = async({username , password})=>{
        const success = handleLoginError({username, password});
        if(!success) return;
        setLoading(true);
        try {
            const {data} = await axios.post("/api/auth/login",{
                username,
                password
            })
            if(data.success){
                throw new Error(data.error);
            }
            //filling the data in the local storage
            localStorage.setItem("chat-user" , JSON.stringify(data));
            setAuthuser(data);

            toast.success('Login successful!');

        } catch (error) {
            toast.error(error.message || 'An error occurred.');
        }
        finally{
            setLoading(false)
        }
    }
    return {loading , uselogin};
}

export default UseLogin;


function handleLoginError({username, password}){
    if(!username || !password){
        toast.error('Please fill all the fields');
        return false;
    }
    if(password.length<6){
        toast.error('Password should be at least 6 characters long');
        return false;
    }
    return true;
}