import mongoose from "mongoose";
import Admin from "../models/admin.model.js";

export const getAdmins = async (req, res) => {
    try {
        const admins = await Admin.find({});
        res.status(200).json({success: true, data: admins});
    } catch (error) {
        console.log("error in fetching schedules: ", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
}

export const createAdmin = async (req, res) => {
    const admin = req.body; //user will send this data

    if (!admin._fName || admin._fName == "" ||
        !admin._lName || admin._lName == "" ||
        !admin._gender || admin._gender == "" ||
        !admin._umakEmail || admin._umakEmail == "" ||
        !admin._umakIDNum || admin._umakIDNum == "" ||
        !admin._role || admin._role == "" ||
        !admin._password || admin._password == "" ||
        !admin._activeStat || admin._activeStat == "" ||
        !admin._dateReg || admin._dateReg == "" ||
        !admin._lastLogin || admin._lastLogin == ""
    ) {
        return res.status(400).json({ success:false, message: "Please fill in all fields" });
    }

    const newAdmin = new Admin(admin);

    try {
        await newAdmin.save();
        res.status(201).json({success: true, data: newAdmin});
    } catch (error) {
        console.error("Error in Create Schedule: ", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }

}
