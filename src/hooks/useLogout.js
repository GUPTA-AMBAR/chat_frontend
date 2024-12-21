import { useAuthContext } from '../authContext/authContext';
import toast from 'react-hot-toast';
import { useState } from 'react';
import axios from 'axios';


const UseLogout = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthuser} = useAuthContext();
    const uselogout = async()=>{

        try {
            setLoading(true);
            const {data} = await axios.post("/api/auth/logout");
            if(data.error){
                throw new Error(data.error);
            }
            //clear the localstorage 
            localStorage.removeItem("chat-user");
            setAuthuser(null);
            toast.success("Logout successfully");

        } catch (error) {
            toast.error(error.message || 'An error occurred.');
        }finally{
            setLoading(false);
        }
    }
    return {loading , uselogout};
}

export default UseLogout;