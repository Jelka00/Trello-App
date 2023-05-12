const Task = require("../models/taskModel");
const mongoose = require("mongoose");
//get all workouts
const getTasks = async (req, res) => {
  const tasks = await Task.find({}).sort({ createdAt: -1 });

  res.status(200).json(tasks);
};
//get a single workout
const getTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Nema tog zadatka" });
  }

  const task = await Task.findById(id);
  if (!task) {
    return res.status(404).json({ error: "Nema tog taska" });
  }

  res.status(200).json(task);
};
//create a new workout
const createTask = async (req, res) => {
  const { title, description, status, user } = req.body;

  try {
    const task = await Task.create({ title, description, status, user });
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a workout
const deleteTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Nema tog zadatka" });
  }

  const task = await Task.findOneAndDelete({ _id: id });

  if (!task) {
    return res.status(404).json({ error: "Nema tog zadatka" });
  }

  res.status(200).json(task);
};

//update a workout
const updateTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Nema tog zadatka" });
  }

  const task = await Task.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!task) {
    return res.status(404).json({ error: "Nema tog zadatka" });
  }

  res.status(200).json(task);
};

module.exports = {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
};
