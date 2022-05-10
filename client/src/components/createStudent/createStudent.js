import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

export default function CreateStudent() {
  const [student, setStudent] = useState({
    regisrationNumber: 0,
    firstName: "",
    lastName: "",
    section: "",
  });

  const createStudent = () => {
    axios.post("http://localhost:5000/", student).then(() => {
      window.location.reload(false);
    });
  };

  return (
    <>
      <h2>Create Student</h2>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Regisration Number"
          variant="outlined"
          value={student.regNo}
          onChange={(event) => {
            setStudent({ ...student, regisrationNumber: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          value={student.firstName}
          onChange={(event) => {
            setStudent({ ...student, firstName: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          value={student.lastName}
          onChange={(event) => {
            setStudent({ ...student, lastName: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Section"
          variant="outlined"
          value={student.section}
          onChange={(event) => {
            setStudent({ ...student, section: event.target.value });
          }}
        />
        <Button variant="contained" color="primary" onClick={createStudent}>
          Enter Student
        </Button>
      </Box>
    </>
  );
}
