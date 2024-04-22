import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    Email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    datetime: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("admin", adminSchema);