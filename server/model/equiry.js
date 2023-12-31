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
    RequirementDetails: String
});

export default mongoose.model("equiry", equirySchema);