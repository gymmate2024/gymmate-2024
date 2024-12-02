import mongoose from "mongoose";

const student = new mongoose.Schema({
    _fName: {
        type: String,
        required: true
    },
    _lName: {
        type: String,
        required: true
    },
    _sex: {
        type: String,
        required: true
    },
    _college: {
        type: String,
        required: true
    },
    _course: {
        type: String,
        required: true
    },
    _year: {
        type: String,
        required: true
    },
    _section: {
        type: String,
        required: true
    },
    _umakEmail: {
        type: String,
        required: true
    },
    _umakID: {
        type: String,
        required: true
    },
    _password: {
        type: String,
        required: true
    },
    _lastLogin: {
        type: Date,
        required: true
    },
    _activeStat: {
        type: Boolean,
        default: false,
        required: true
    }
}, {
    timestamps: true
});

const Student = mongoose.model("Student", studentSchema);

export default Student