require("dotenv").config();
const express = require("express");
const app = express();
const taskController = require("./controller/taskController");
const port = process.env.PORT;

app.use(express.json());

app.use("/task", taskController);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
