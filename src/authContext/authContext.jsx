import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();


export const useAuthContext = ()=> {
	return useContext(AuthContext);
};
export const AuthProvider = ({ children }) => {
    const [authuser ,setAuthuser] = useState(JSON.parse(localStorage.getItem("chat-user") ||null));

    return <AuthContext.Provider value={{authuser , setAuthuser}} >{children}</AuthContext.Provider>
}