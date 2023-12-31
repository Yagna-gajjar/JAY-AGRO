import mongoose from "mongoose";

const subscribeSchema = new mongoose.Schema({
    Email: {
        type: String,
        require: true
    }
});

export default mongoose.model("subscribe", subscribeSchema);