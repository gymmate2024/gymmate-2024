import express from "express";
import { createStudent, loginStudent, logoutStudent } from "../controller/student.controller.js";

const router = express.Router();

// Route for creating a new admin
router.post("/", createStudent);

// Route for logging in an admin
router.post("/login", loginStudent);

router.post("/logout", logoutStudent);

const studentsRoutes = router;

export default studentsRoutes;