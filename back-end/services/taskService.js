const taskModel = require("../model/listModel");

const getTasks = async () => {
  const getAll = await taskModel.getAllLists();
  return getAll;
};

const createTasks = async (tasks) => {
  const created = await taskModel.addTask(tasks);
  return created;
};

module.exports = {
  getTasks,
  createTasks,
};
