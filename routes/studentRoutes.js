const express = require("express");
const router = express.Router();

const {
  getStudent,
  createStudent,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

router.route("/").get(getStudent).post(createStudent);
router
  .route("/:id")
  .get(getStudentById)
  .put(updateStudent)
  .delete(deleteStudent);

module.exports = router;
