const taskService = require("../services/taskService");
const { StatusCodes } = require("http-status-codes");
const { Router } = require("express");

const route = Router();

route.get("/", async (req, res) => {
  try {
    const { tasks } = req.body;
    const getAll = await taskService.getTasks(tasks);
    return res.status(StatusCodes.OK).json(getAll);
  } catch (e) {
    console.log("Erro", e);
  }
});

route.post("/tasks", async (req, res) => {
  try {
    const { tasks } = req.body;
    const createdTasks = await taskService.createTasks(tasks);
    console.log(
      "🚀 ~ file: taskController.js ~ line 21 ~ route.post ~ createdTasks",
      createdTasks
    );
    return res.status(StatusCodes.CREATED).json(createdTasks);
  } catch (e) {
    console.log("Erro", e);
  }
});

route.put("/tasks/:id", async (req, res) => {
  try {
    const { tasks } = req.body;
    const { id } = req.params;

    const updatedTasks = await taskService.updateTask(tasks, id);
    return res.status(StatusCodes.OK).json(updatedTasks);
  } catch (e) {
    console.log("Erro", e);
  }
});

route.delete("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTasks = await taskService.deleteTask(id);
    return res.status(StatusCodes.OK).json(deletedTasks);
  } catch (e) {
    console.log("Erro", e);
  }
});

module.exports = route;
