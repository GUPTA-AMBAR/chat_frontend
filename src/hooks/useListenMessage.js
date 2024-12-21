import { useSocketContext } from "../authContext/socketContext";
import useConversation from "../zustand/getConversation";
import notificationSound from "../assets/sounds/iphonetone.mp3";
import { useEffect } from "react";


const useListenMessage = () => {
  const {socket} = useSocketContext();
  const {selectedMessages , setSelectedMessages}= useConversation();

  const handleNewMessage = (message) => {
    message.shouldShake = true;
    setSelectedMessages([...selectedMessages, message]);
    const sound = new Audio(notificationSound);
    sound.play();
  };
  
  useEffect(() => {

    socket?.on("newMessage", handleNewMessage);
    return () => socket.off("newMessage", handleNewMessage);
  }, [socket, handleNewMessage,selectedMessages]);

}

export default useListenMessage;

