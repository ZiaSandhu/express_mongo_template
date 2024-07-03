const Student = require("../models/student");

const getStudent = async (req, res, next) => {
  try {
    const students = await Student.find({});
    res.status(200).json(students);
  } catch (error) {
    next(error);
  }
};
const getStudentById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const students = await Student.findById(id);
    res.status(200).json(students);
  } catch (error) {
    next(error);
  }
};

const createStudent = async (req, res, next) => {
  try {
    console.log(req.body);
    const user = await Student.create({ ...req.body });
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};
const updateStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await Student.updateOne({ _id: id }, { ...req.body });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
const deleteStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Student.deleteOne({ _id: id });
    res.status(200).json({ success: true });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getStudent,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
