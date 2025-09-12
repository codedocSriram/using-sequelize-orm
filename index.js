const express = require("express");
const studentRouter = require("./routes/studentsRouter");
const app = express();

app.use(express.json());

app.use("/api/students", studentRouter);

app.get("/", (req, res) => {
  res.send("Welcome to homePage!!!");
});

app.listen(4000, () => {
  console.log("Server running in port 4000");
});
