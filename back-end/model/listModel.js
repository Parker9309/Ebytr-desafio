const { getConnection } = require("./connnection");

const getAllLists = async () => {
  const db = await getConnection();
  const allLists = await db.collection("tasks").find();
  return allLists;
};

const addTask = async (tasks) => {
  const db = await getConnection();
  const addTasks = await db.collection("tasks").insertOne({ tasks });
  console.log(
    "🚀 ~ file: listModel.js ~ line 12 ~ addTask ~ addTasks",
    addTasks
  );
  return { _id: addTasks.insertedId, tasks };
};

module.exports = {
  getAllLists,
  addTask,
};
