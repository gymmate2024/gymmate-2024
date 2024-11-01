import { create } from 'zustand';

const useWalkinStore = create((set) => ({
    showRegister: false,
    showSearch: false,
    showLogin: false,
    setShowRegister: (value) => set({ showRegister: value }),
    setShowSearch: (value) => set({ showSearch: value }),
    setShowLogin: (value) => set({ showLogin: value }),
}));

export default useWalkinStore;