import { create } from 'zustand';

const useWalkinStore = create((set) => ({
    currentDate: new Date(),
    selectedDay: null,
    selectedTime: null,
    isRegistered: false,
    isBooked: false,
    showRegister: false,
    showLogin: false,
    showBooking: false,
    showARInput: false,
    showReview: false,
    showLogOptions: false,
    showPassword: { password: false, confirmPassword: false }, // Add this line
    setCurrentDate: (date) => set({ currentDate: date }),
    setSelectedDay: (day) => set({ selectedDay: day }),
    setSelectedTime: (time) => set({ selectedTime: time }),
    setIsRegistered: (value) => set({ isRegistered: value }),
    setIsBooked: (value) => set({ isBooked: value }),
    setShowRegister: (value) => set({ showRegister: value }),
    setShowLogin: (value) => set({ showLogin: value }),
    setShowBooking: (value) => set({ showBooking: value }),
    setShowARInput: (value) => set({ showARInput: value }),
    setShowReview: (value) => set({ showReview: value }),
    setShowLogOptions: (value) => set({ showLogOptions: value }),
    setShowPassword: (value) => set((state) => ({ showPassword: { ...state.showPassword, ...value } })) // Add this line
}));

export default useWalkinStore;