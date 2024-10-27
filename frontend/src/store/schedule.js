
import { create } from 'zustand';

const useScheduleStore = create((set) => ({
    currentDate: new Date(),
    selectedDay: null,
    setCurrentDate: (date) => set({ currentDate: date }),
    setSelectedDay: (day) => set({ selectedDay: day }),
    selectedTime: null,
    setSelectedTime: (time) => set({ selectedTime: time }),
}));

export default useScheduleStore;