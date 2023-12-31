import mongoose from "mongoose";

const productpartsSchema = new mongoose.Schema({
    productname: {
        type: String,
        require: true
    },
    productimage: {
        type: String,
        require: true
    }
});

export default mongoose.model("productparts", productpartsSchema); 