let mongoose = require("mongoose");

let modelSchema = new mongoose.Schema({
    name: String,
    city: String,
})

let University = mongoose.model("University", modelSchema);
module.exports = University;