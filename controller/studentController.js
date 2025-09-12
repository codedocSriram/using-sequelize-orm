const db = require("../utils/dbConnection");

const getAllStudents = (req, res) => {
  const getAllStudentsQuery = "Select * from students";
  db.execute(getAllStudentsQuery, (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      res.end();
      db.end();
      return;
    }
    if (JSON.stringify(result) === "[]") {
      console.log("Students table is empty");
      res.status(404).send("Students table is empty");
      res.end();
      return;
    }
    res.status(200).json(result);
  });
};

const getSingleStudent = (req, res) => {
  const { id } = req.params;
  const getSingleStudentQuery = "Select * from students where id= ?;";
  db.execute(getSingleStudentQuery, [id], (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      res.end();
      db.end();
      return;
    }
    if (JSON.stringify(result) === "[]") {
      console.log(`No such student with id ${id} present in students table`);
      res
        .status(404)
        .send(`No such student with id ${id} present in students table`);
      res.end();
      return;
    }
    res.status(200).json(result);
  });
};

const addNewStudent = (req, res) => {
  const { name, email, age } = req.body;
  const addNewStudentQuery =
    "insert into students (name,email,age) values(?,?,?);";
  db.execute(addNewStudentQuery, [name, email, age], err => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      res.end();
      db.end();
      return;
    }
    res
      .status(200)
      .send(`Student ${name} with email ${email} has been added successfully!`);
  });
};

const updateStudent = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const updateStudentQuery =
    "update students set name= ?, email= ? where id= ?";
  db.execute(updateStudentQuery, [name, email, id], err => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      res.end();
      db.end();
      return;
    }
    res
      .status(200)
      .send(`Student with id ${id} name has been changed to ${name}`);
  });
};

const deleteStudent = (req, res) => {
  const { id } = req.params;
  const deleteStudentQuery = "Delete from students where id= ?";
  db.execute(deleteStudentQuery, [id], (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      res.end();
      db.end();
      return;
    }
    if (result.affectedRows === 0) {
      console.log(`No such student with id ${id} is present`);
      res.status(404).send(`No such student with id ${id} is present`);
      res.end();
      return;
    }
    res
      .status(200)
      .send(`Student with id ${id} has been deleted successfully!`);
  });
};

module.exports = {
  getAllStudents,
  getSingleStudent,
  addNewStudent,
  updateStudent,
  deleteStudent
};
