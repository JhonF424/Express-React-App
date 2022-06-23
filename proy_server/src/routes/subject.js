const express = require("express");
const SubjectController = require("../controllers/subject");

const api = express.Router();

api.get("/subjects", SubjectController.getSubjects)
api.post("/newSubject", SubjectController.postSubject)
api.put("/update-subject/:id", SubjectController.updateSubject)
api.delete("/delete-subject/:id", SubjectController.deleteSubject)
api.get("/find-subject/:piaaV", SubjectController.filterByPIAAVersion)


module.exports = api;
