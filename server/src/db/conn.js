const mongoose = require("mongoose");
const URI = process.env.URI;
const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Your  database is connected Successfully");
    } catch (error) {
        console.log("Your mongo db error : " + error);
    }
}


// export the module
module.exports = { connectDb }