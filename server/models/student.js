import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  regisrationNumber: Number,
  firstName: String,
  lastName: String,
  section: {
    type: String,
    default: "A",
  },
  subjects: [String],
});

const student = mongoose.model("student", studentSchema);

export default student;
