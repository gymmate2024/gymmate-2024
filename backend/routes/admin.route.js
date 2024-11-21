import express from "express";
import { loginAdmin, createAdmin, getAdmins } from "../controller/admin.controller.js";

const router = express.Router();

// Route for logging in an admin
router.post("/login", loginAdmin);

// Route for getting all admins
router.get("/", getAdmins);

// Route for creating a new admin
router.post("/", createAdmin);

const adminsRoutes = router;

export default adminsRoutes;