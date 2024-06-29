const jwt = require("jsonwebtoken");
const { Register } = require("../models/model");
const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
        res.status(401).json({ message: "UnAuthorized HTTP, token not provided!" })
    } else {
        // remove Bearer from token
        const jwtToken = token.replace("Bearer", "").trim();
        // console.log("token from auth middleware : " + jwtToken);
        try {
            let isVerified = jwt.verify(jwtToken, process.env.SECRET_KEY);
            // check user in database
            const user = await Register.findOne({ email: isVerified.email }).select({ password: 0 });

            // add user to request object for accessibility in other routes
            req.user = user;
            req.token = token;
            next()
        } catch (error) {
            return res.status(401).json({ message: "UnAuthorized Invalid token!" })
        }
    }
}
module.exports = authMiddleware;