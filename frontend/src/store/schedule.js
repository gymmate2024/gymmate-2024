import { create } from 'zustand';

const useScheduleStore = create((set) => ({
    currentDate: new Date(),
    selectedDay: null,
    selectedTime: null,
    setCurrentDate: (date) => set({ currentDate: date }),
    setSelectedDay: (day) => set({ selectedDay: day }),
    setSelectedTime: (time) => set({ selectedTime: time }),
}));

export default useScheduleStore; // Ensure this line is correct