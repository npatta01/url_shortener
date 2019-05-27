const mongoose = require("mongoose");
const {Schema} = mongoose;

const urlSchema = new Schema({
    originalUrl: String,
    urlCode: String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

mongoose.model("url", urlSchema);