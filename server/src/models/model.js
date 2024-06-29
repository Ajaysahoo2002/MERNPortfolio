const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
// create new schema
const userShema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
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
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})
// creating new collections
const Register = new mongoose.model("Register", userShema);


// gnerating token
const generateToken = async function (email) {
    try {
        return jwt.sign(
            {
                email: email
            },
            process.env.SECRET_KEY,
            {
                expiresIn: "30d"
            });
    } catch (error) {
        console.log(`Your error : ${error}`);
    }

}

// export the module
module.exports = { Register, generateToken }