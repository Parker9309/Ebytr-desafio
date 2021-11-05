const taskModel = require("../model/listModel");

const getTasks = async () => {
  const getAll = await taskModel.getAllLists();
  return getAll;
};

const createTasks = async (tasks) => {
  const created = await taskModel.addTask(tasks);
  return created;
};

const updateTask = async (tasks, id) => {
  const updated = await taskModel.updateTask(tasks, id);
  return updated;
};

const deleteTask = async (id) => {
  const deleted = await taskModel.deleteTasks(id);
  return deleted;
};

module.exports = {
  getTasks,
  createTasks,
  updateTask,
  deleteTask,
};
