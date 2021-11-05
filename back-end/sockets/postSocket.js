const postTasks = require("../model/listModel");

module.exports = (io) => {
  io.on("connection", (socket) => {
    socket.on("tasksAdded", async (tasks) => {
      const post = await postTasks.addTask(tasks);
      io.emit("tasksAlreadyAdded", post);
    });
  });
};
