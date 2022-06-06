const express = require('express')
const UserController = require("../controllers/user")

const api = express.Router();

api.post("/signup", UserController.singUp);
api.post("/signin", UserController.signIn);
module.exports = api; 