import { create } from 'zustand';

const useWalkinStore = create((set) => ({
    showRegister: false,
    showSearch: false,
    setShowRegister: (value) => set({ showRegister: value }),
    setShowSearch: (value) => set({ showSearch: value }),
}));

export default useWalkinStore;