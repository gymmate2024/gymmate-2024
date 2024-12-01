// backend/controller/schedule.controller.js
import Schedule from "../models/schedule.model.js"; // Import the Schedule model

// Function to fetch a schedule by date
export const getScheduleByDate = async (req, res) => {
    const { date } = req.params; // Get the date from the request parameters

    try {
        const schedule = await Schedule.findOne({ _date: new Date(date) }); // Query the schedule by date
        if (!schedule) {
            return res.status(404).json({ success: false, message: "Schedule not found." });
        }
        res.status(200).json(schedule); // Return the found schedule
    } catch (error) {
        console.error("Error fetching schedule:", error.message);
        res.status(500).json({ success: false, message: "Server error." });
    }
};

// Function to create a new schedule (optional, if you need it)
export const createSchedule = async (req, res) => {
    const { _date, timeSlots } = req.body; // Extract date and time slots from the request body

    if (!_date || !timeSlots || !Array.isArray(timeSlots)) {
        return res.status(400).json({ success: false, message: "Date and time slots are required." });
    }

    const newSchedule = new Schedule({ _date, timeSlots });

    try {
        await newSchedule.save();
        res.status(201).json({ success: true, data: newSchedule });
    } catch (error) {
        console.error("Error creating schedule:", error.message);
        res.status(500).json({ success: false, message: "Server error." });
    }
};