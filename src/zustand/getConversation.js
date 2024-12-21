import { create } from "zustand";

// Zustand store for managing conversation state
const useConversation = create((set) => ({
    selectedConversation: null,
    setSelectedConversation: (conversation) => set({ selectedConversation: conversation }),

    selectedMessages: [], 
    setSelectedMessages: (messages) => set({ selectedMessages: messages }), // Properly update the messages
}));

export default useConversation;







