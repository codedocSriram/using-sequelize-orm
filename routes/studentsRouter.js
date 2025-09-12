const express = require("express");
const controller = require("../controller/studentController");
const router = express.Router();

router.get("/all", controller.getAllStudents);
router.get("/:id", controller.getSingleStudent);
router.post("/add", controller.addNewStudent);
router.put("/update/:id", controller.updateStudent);
router.delete("/delete/:id", controller.deleteStudent);
module.exports = router;
