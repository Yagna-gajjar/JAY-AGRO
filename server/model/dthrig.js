import mongoose from "mongoose";

const DTHrigSchema = new mongoose.Schema({
    dthname: {
        type: Number,
        require: true,
    },
    dthimage: {
        type: String,
        require: true,
    },
    HD: {
        type: String,
        require: true,
    },
    DD: {
        type: String,
        require: true,
    },
    Truck: {
        type: String,
        require: true,
    },
    Application: {
        type: String,
        require: true,
    },
    Formation: {
        type: String,
        require: true,
    },
    a: {
        type: Array,
        require: true
    },
    b: {
        type: Array,
        require: true
    }
});

export default mongoose.model("dthrig", DTHrigSchema); 