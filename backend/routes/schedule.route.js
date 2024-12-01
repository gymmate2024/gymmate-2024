// backend/routes/schedule.route.js
import express from "express";
import { getScheduleByDate, createSchedule, updateSchedule } from "../controller/schedule.controller.js"; // Import the controller functions

const router = express.Router();

// Route to get a schedule by date
router.get("/:date", getScheduleByDate);

// Optional: Route to create a new schedule
router.post("/", createSchedule);

// Route to update a schedule time slot
router.put("/update", updateSchedule);

export default router;