const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    name: String,
    contact: String,
    idproof: String,
    gender: String,
    scontact: String,
    address:String,
    attendantSigned: String
});

module.exports = mongoose.model("patient", patientSchema);
