import mongoose from "mongoose";

const equirySchema = new mongoose.Schema({
    nameofproduct: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    Email: {
        type: String,
        require: true
    },
    PurposeofRequirement: {
        type: String,
        require: true
    },
    RequirementDetails: String,
    datetime: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("equiry", equirySchema);