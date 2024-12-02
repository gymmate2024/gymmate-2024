import mongoose from "mongoose";
import Student from "../models/student.model.js";

export const createStudent = async (req, res) => {
    const student = req.body; // User will send this data

    // Validate required fields
    const requiredFields = [
        '_fName', '_lName', '_sex', '_college', '_course', 
        '_year', '_section', '_umakEmail', '_umakID', 
        '_password', '_lastLogin', '_activeStat', '_activeStat', '_isAthlete'
    ];

    for (const field of requiredFields) {
        if (student[field] === undefined || student[field] === null || student[field] === "") {
            return res.status(400).json({ success: false, message: `Please fill in the field: ${field}` });
        }
    }

    const newStudent = new Student(student);

    try {
        await newStudent.save();
        res.status(201).json({ success: true, data: newStudent });
    } catch (error) {
        console.error("Error in Creating Student: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const loginStudent = async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email and password are required." });
    }
  
    try {
      const student = await Student.findOne({ _umakEmail: email });
      if (!student) {
        return res.status(401).json({ success: false, message: "Invalid Email." });
      }
  
      const isMatch = await Student.findOne({ _password: password });
      if (!isMatch) {
        return res.status(401).json({ success: false, message: "Invalid Password." });
      }
  
      // Set _activeStat to true upon successful login
      student._activeStat = true;
      await student.save(); // Save the updated student document
  
      res.status(200).json({ success: true, user: { id: student._id, name: student._fName } });
    } catch (error) {
      console.error("Error during student login: ", error.message);
      res.status(500).json({ success: false, message: "Server error." });
    }
  };
  
  export const logoutStudent = async (req, res) => {
    const { userId } = req.body; // Assuming you send the user ID when logging out
  
    try {
        const student = await Student.findById(userId);
        if (!student) {
            return res.status(404).json({ success: false, message: "Student not found." });
        }
  
        // Set _activeStat to false upon logout
        student._activeStat = false;
        await student.save(); // Save the updated student document
  
        res.status(200).json({ success: true, message: "Logout successful." });
    } catch (error) {
        console.error("Error during student logout: ", error.message);
        res.status(500).json({ success: false, message: "Server error." });
    }
  };