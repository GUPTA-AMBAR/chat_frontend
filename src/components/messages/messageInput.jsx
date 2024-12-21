import { BsSend } from "react-icons/bs";
import SendMessage from "../../hooks/sendMessage";
import { useState } from "react";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = SendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    await sendMessage(message); 
    setMessage("");
  };

  return (
    <form className="px-4 my-3 relative" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 pr-10 bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-2 flex items-center text-white"
          disabled={loading} // Disable button during loading
        >
          {loading ? <span className="loading loading-spinner"></span> : <BsSend />}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;

