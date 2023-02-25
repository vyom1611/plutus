const express = require("express");
const app = express();
const dotenv = require("dotenv");
const stockRoute = require("./routes/Stock");

dotenv.config();

app.use(express.json());

app.use("/api/stocks", stockRoute);



app.listen(8800, () => {
    console.log("Backend server is running!");
});
