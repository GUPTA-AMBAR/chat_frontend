import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../authContext/authContext';

const UseSignUp = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthuser} = useAuthContext();

    const usesign = async ({ fullName, username, password, confirmPassword, gender }) => {
        const success = handleInputError({ fullName, username, password, confirmPassword, gender });
        if (!success) return;

        setLoading(true);

        try {
            const {data} = await axios.post('/api/auth/signup', {
                fullName,
                username,
                password,
                confirmPassword,
                gender,
            });

            if (data.error) {
				throw new Error(data.error);
			}

            //localStorage
            localStorage.setItem("chat-user" , JSON.stringify(data));
            setAuthuser(data);

            toast.success('Signup successful!');

        } catch (error) {
            toast.error(error.message || 'An error occurred.');
        } finally {
            setLoading(false);
        }
    };

    return { loading, usesign };
};

export default UseSignUp;

function handleInputError({ fullName, username, password, confirmPassword, gender }) {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error('Please enter all required fields!');
        return false;
    }
    if (password !== confirmPassword) {
        toast.error('Passwords do not match!');
        return false;
    }
    if (password.length < 6) {
        toast.error('Password length must be at least 6 characters.');
        return false;
    }
    return true;
}
