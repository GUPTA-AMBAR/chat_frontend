import { useState } from "react";
import useConversation from "../zustand/getConversation";
import { toast } from "react-hot-toast";

const SendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversation, selectedMessages, setSelectedMessages } = useConversation();

  const sendMessage = async (message) => {
    if (!selectedConversation) {
      toast.error("No conversation selected.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);

      // Update the local state with the newly sent message
      setSelectedMessages([...selectedMessages, data]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessage };
};

export default SendMessage;
