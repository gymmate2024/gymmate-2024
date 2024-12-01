// frontend/src/store/schedule.js
import { create } from 'zustand';

const useScheduleStore = create((set) => ({
    currentDate: new Date(), // The current date
    selectedDay: null, // The day selected by the user
    selectedTime: null, // The time slot selected by the user
    scheduleData: null, // The schedule data fetched from the server
    scheduleId: null, // The ID of the fetched schedule

    // Function to set the current date
    setCurrentDate: (date) => set({ currentDate: date }),

    // Function to set the selected day
    setSelectedDay: (day) => set({ selectedDay: day }),

    // Function to set the selected time
    setSelectedTime: (time) => set({ selectedTime: time }),

    // Function to set the fetched schedule data
    setScheduleData: (data) => set({ scheduleData: data, scheduleId: data ? data._id : null }),

    // Function to reset the schedule state
    resetScheduleState: () => set({ selectedDay: null, selectedTime: null, scheduleData: null, scheduleId: null }),

    // Function to fetch schedule data by date
    fetchScheduleByDate: async (date) => {
        const formattedDate = new Date(date).toISOString().split('T')[0]; // Format date as YYYY-MM-DD
        const response = await fetch(`http://localhost:5000/api/schedules/${formattedDate}`); // Adjust the URL as needed
        const data = await response.json();
    
        if (response.ok) {
            set({ scheduleData: data, scheduleId: data ? data._id : null }); // Store the fetched schedule data
            if (data && data._id) {
                console.log("Schedule exists with ID:", data._id); // Log the existing schedule ID
            } else {
                console.log("No schedule found for this date, but response was OK."); // Log if no schedule ID exists
            }
        } else {
            console.log("No schedule found for this date. Response not OK:", data.message); // Log if no schedule exists
            set({ scheduleData: null, scheduleId: null }); // Clear the schedule data if not found
        }
    },
    
}));

export default useScheduleStore;