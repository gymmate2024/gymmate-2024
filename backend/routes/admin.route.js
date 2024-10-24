import express from "express";
import mongoose from "mongoose";
import Admin from "../models/admin.model.js";
import { createAdmin, getAdmins } from "../controller/admin.controller.js";

const router = express.Router();

router.get("/", getAdmins);

router.post("/", createAdmin);

const adminsRoutes = router;

export default adminsRoutes;