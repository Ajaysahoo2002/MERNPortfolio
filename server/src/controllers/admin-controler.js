// Import the Contact model
const Contact = require("../models/contact-model");

// Import the Register model
const { Register } = require("../models/model");

// Define a function to get all users on the admin page
const getAllUsersAdminPage = async (req, res, next) => {
    try {
        // Find all users in the Register model, excluding the password field
        const users = await Register.find({}, { password: 0 });

        // If no users are found, return a 404 error with a message
        if (!users && users.length === 0) {
            return res.status(404).json({ message: "NO users found!" });
        }

        // Return a 200 OK response with the list of users
        res.status(200).json(users);
    } catch (error) {
        // If an error occurs, pass it to the next middleware function
        next(error);
    }
}


// get a signle users data by id
const getUserById = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const userData = await Register.findOne({ _id: userId }, { password: 0 });
        return res.status(200).json(userData);
    } catch (error) {
        next(error);
    }
}



// update signle users data by id
const updateUsersDataById = async (req, res, next) => {
    try {
        const user_id = req.params.id;
        const updateUsersData = req.body;
        const updatedData = await Register.updateOne({ _id: user_id }, { $set: updateUsersData });
        return res.status(200).json(updatedData);
    } catch (error) {
        next(error);
    }
}


// Define a function to get all contact users on the admin page
const getAllContactUsersAdminPage = async (req, res) => {
    try {
        // Find all contacts in the Contact model
        const contacts = await Contact.find();

        // If no contacts are found, return a 404 error with a message
        if (!contacts && contacts.length === 0) {
            return res.status(404).json({ message: "NO users found!" });
        }

        // Return a 200 OK response with the list of contacts
        res.status(200).json(contacts);
    } catch (error) {
        // If an error occurs, pass it to the next middleware function
        next(error);
    }
}

// delete user data by id
const deleteUserById = async (req, res, next) => {
    try {
        // Find the user by id  
        const id = req.params.id
        await Register.deleteOne({ _id: id });
        return res.status(200).json({ msg: "user deleted successfully!" });
    } catch (error) {
        next(error)
    }
}


// delete user data by id
const deleteUserContactsById = async (req, res, next) => {
    try {
        // Find the user by id  
        const id = req.params.id
        await Contact.deleteOne({ _id: id });
        return res.status(200).json({ msg: "user deleted successfully!" });
    } catch (error) {
        next(error)
    }
}

// Export the two functions
module.exports = { getAllUsersAdminPage, getAllContactUsersAdminPage, deleteUserById, deleteUserContactsById, getUserById, updateUsersDataById };