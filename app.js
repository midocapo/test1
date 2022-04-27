const express = require("express")
const dotenv = require("dotenv")

dotenv.config();

const app = express();
const port = process.env.PORT  || 3000;
const user_name = process.env.USER_NAME || "Mido";

app.get("/", (_req, res) => {
    res.send(`Hello ${user_name}, the app is running!`);
});

app.listen(port, () => {
    console.log(`server started at port: ${port}`);
});