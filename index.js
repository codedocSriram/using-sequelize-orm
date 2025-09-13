const express = require("express");
const db = require("./utils/dbConnection");
const studentRouter = require("./routes/studentsRouter");
const studentModels = require("./models/students");
const app = express();

app.use(express.json());

app.use("/api/students", studentRouter);

app.get("/", (req, res) => {
  res.send("Welcome to homePage!!!");
});

db
  .sync({ force: true })
  .then(() => {
    app.listen(4000, () => {
      console.log("Server is running in port 4000");
    });
  })
  .catch(err => {
    console.log(err);
  });
