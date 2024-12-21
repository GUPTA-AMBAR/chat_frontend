import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./authContext";
import io from "socket.io-client";
import dotenv from 'dotenv';

dotenv.config();

const BURL = process.env.BACKURL;

const SocketContext = createContext();

export const useSocketContext = () => useContext(SocketContext);

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authuser } = useAuthContext();

    useEffect(() => {
        if (authuser) {
            const newSocket = io(BURL, {
                query: { userId: authuser._id },
            });
            setSocket(newSocket);

            newSocket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            });

            return () => {
                newSocket.disconnect();
                setSocket(null);
            };
        } else {
            if (socket) {
                socket.disconnect();
                setSocket(null);
            }
        }
    }, [authuser]);

    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    );
};
