require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { router } = require("./routes/auth-route");
const contactRouter = require("./routes/contact-route");
const adminRouter = require("./routes/admin-route");
const { connectDb } = require("./db/conn");
const errorMiddleware = require("./errors/errorMiddleware");
const app = express();
const port = process.env.PORT || 5000;
const client_api = process.env.CLIENT_API;

// handling cors policy
const corsOptions = {
    origin: `${client_api}`,
    methods: "GET, POST, PUT, PATCH, DELETE, HEAD",
    credentials: true
}
app.use(cors(corsOptions));

app.use(express.json()); // Middleware para parse
app.use(express.urlencoded({ extended: true })); //Middleware para urlencode
app.use("/api", router);

// router for the contact page
app.use("/api/form", contactRouter);

// router for the admin page
app.use("/admin", adminRouter);


app.use(errorMiddleware);
connectDb().then(() => {
    app.listen(port, () => { console.log(`Your Server is listened on port no. ${port}`); })
})