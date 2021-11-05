const { getConnection } = require("./connnection");
const { ObjectId } = require("mongodb");

const getAllLists = async () => {
  const db = await getConnection();
  const allLists = await db.collection("tasks").find({}).toArray();
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

const updateTask = async (tasks, id) => {
  const db = await getConnection();
  const findId = await db.collection("tasks").findOne({ _id: ObjectId(id) });
  console.log(
    "🚀 ~ file: listModel.js ~ line 23 ~ updateTask ~ findId",
    findId
  );

  if (!findId) {
    return false;
  }

  const updateTasks = await db
    .collection("tasks")
    .updateOne({ _id: ObjectId(id) }, { $set: { tasks } });

  if (!updateTasks) {
    console.log(
      "🚀 ~ file: listModel.js ~ line 34 ~ updateTask ~ updateTasks",
      updateTasks
    );
    return false;
  }

  return { _id: ObjectId(id), tasks };
};

const deleteTasks = async (id) => {
  const db = await getConnection();
  const deleteId = await db
    .collection("tasks")
    .deleteOne({ _id: ObjectId(id) });
  return deleteId;
};

module.exports = {
  getAllLists,
  addTask,
  updateTask,
  deleteTasks,
};
