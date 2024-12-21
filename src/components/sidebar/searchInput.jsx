import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/getConversation";
import { useState } from "react";
import toast from "react-hot-toast";
import UseGetConversations from "../../hooks/useGetConversation";

const SearchInput = () => {
    const [input, setInput] = useState("");
    const { selectedConversation, setSelectedConversation } = useConversation();
	const {conversations} = UseGetConversations();

	const handleSearch = (e) => {
        e.preventDefault();
		if(input.length<3){
			toast.error("Name should contains atleast 3 charcters");
		}
		if(input.trim()){
			const findConversation = conversations.find((c)=>(c.fullName.toLowerCase().includes(input.toLowerCase())));
			if(findConversation){
				setSelectedConversation(findConversation);
				setInput("");
			}
		}
		else{
            toast.error("Please enter a search term");
        }

        setInput(""); 
    };

    return (
        <form className="flex items-center gap-2" onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search…"
                className="input input-bordered rounded-full"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="btn btn-circle bg-sky-500 text-white"
            >
                <IoSearchSharp className="w-6 h-6 outline-none" />
            </button>
        </form>
    );
};

export default SearchInput;
