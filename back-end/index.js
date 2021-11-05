require("dotenv").config();
const express = require("express");
const app = express();

const taskController = require("./controller/taskController");
const port = process.env.PORT;
const server = require("http").createServer(app);
app.use(express.json());

app.use("/task", taskController);
app.use("/task/:id", taskController);

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

const postTasks = require("./sockets/postSocket");
postTasks(io);

server.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
