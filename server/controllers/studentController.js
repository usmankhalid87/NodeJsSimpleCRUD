import studentData from "../models/student.js";

export const getStudents = async (req, res) => {
  const students = await studentData.find();
  res.status(200).json(students);
};

export const createStudent = async (req, res) => {
  const student = req.body;
  const newStudent = new studentData(student);

  await newStudent.save();
  res.status(201).json(newStudent);
};
