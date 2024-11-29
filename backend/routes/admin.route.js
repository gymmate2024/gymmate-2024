import express from "express";
<<<<<<< Updated upstream
import mongoose from "mongoose";
import Admin from "../models/admin.model.js";
import { createAdmin, getAdmins } from "../controller/admin.controller.js";

const router = express.Router();

=======
import { loginAdmin, logoutAdmin, createAdmin, getAdmins } from "../controller/admin.controller.js";

const router = express.Router();

// Route for logging in an admin
router.post("/login", loginAdmin);

// Route for logging out in an admin
router.post("/logout", logoutAdmin);

// Route for getting all admins
>>>>>>> Stashed changes
router.get("/", getAdmins);

router.post("/", createAdmin);

const adminsRoutes = router;

export default adminsRoutes;