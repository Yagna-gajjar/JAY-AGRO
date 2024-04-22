import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    Email: {
        type: String,
        require: true
    },
    number: {
        type: String,
        require: true
    },
    subject: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    },
    datetime: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("contact", contactSchema);