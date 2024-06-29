const Contact = require("../models/contact-model")
// code for contact page
const contactPage = async (req, res, next) => {
    try {
        const { username, email, message } = req.body;
        // check wheather user exist or not
        if (!username || !email || !message) {
            throw new Error('All fields are required')
        } else {
            const isUserExist = await Contact.findOne({ email });
            if (isUserExist) {
                throw new Error('Your have already sent message on given  email');
            } else {
                const userData = await Contact.create({ username, email, message });
                res.status(200).json(userData);
            }
        }
    } catch (error) {
        next(error)
    }
}

// exports the module
module.exports = { contactPage }