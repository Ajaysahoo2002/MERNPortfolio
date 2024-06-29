const bcrypt = require("bcrypt");
const { Register, generateToken } = require("../models/model");


// create and store the users data
const postData = async (req, res) => {
    try {
        // get data from user 
        let { username, email, phone, password } = req.body;

        // // find the user if registered or not
        const existUser = await Register.findOne({ email });
        // console.log(existUser);
        if (existUser) {
            res.status(400).json({ msg: "user is already registered!" });
        } else {
            // hash the password
            const hashPassword = await bcrypt.hash(password, 10);
            password = hashPassword;
            // save the new user to database
            const userData = await Register.create({ username, email, phone, password });
            res.status(200).json({
                msg: "Registration successfull!",
                id: userData._id,
                token: await generateToken(email)
            });
        }
    } catch (error) {
        res.status(400).send((`Your Error : ${error}`));
        console.log(error);
    }
}


// code for login

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await Register.findOne({ email });

        // compare password
        const orgPassword = await bcrypt.compare(password, user.password);
        if (user && orgPassword) {
            res.status(201).json({
                msg: "You have successfully logedIn...",
                userId: user._id,
                token: await generateToken(email)
            })
        } else {
            res.status(401).send("please enter valid credentials!");
        }
    } catch (error) {
        // res.status(400).send((`Your Error : ${error}`));
        next(error);
    }
}


// code to send user data to client

const userData = async (req, res) => {
    try {
        const user_data = req.user;
        // console.log(user_data);
        return res.status(200).json({ user_data });
    } catch (error) {
        console.log(error);
    }
}

// export the modules
module.exports = { postData, login, userData }