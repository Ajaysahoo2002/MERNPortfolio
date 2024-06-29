const mongoose = require("mongoose");
const validator = require("validator");

// creating schema
const contactSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email...")
            }
        }
    },
    message: {
        type: String,
        required: true
    }
})

// creating model or collections
const Contact = new mongoose.model("Contact", contactSchema);

// exports the module
module.exports = Contact;