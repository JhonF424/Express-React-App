const express = require("express");
const SubjectController = require("../controllers/subject");

const api = express.Router();

api.get("/subjects", SubjectController.getSubjects)
api.post("/new-subject", SubjectController.postSubject)
api.put("/update-subject", SubjectController.updateSubject)
api.delete("/delete-subject", SubjectController.deleteSubject)
api.get("/find-subject/:piaaV", SubjectController.filterByPIAAVersion)


module.exports = api;
