import express from "express";
import {
  getStudents,
  createStudent,
} from "../controllers/studentController.js";
import student from "../models/student.js";

const router = express.Router();

router.get("/", getStudents);
router.post("/", createStudent);

export default router;
