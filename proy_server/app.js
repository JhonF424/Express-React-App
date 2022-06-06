const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { API_VERSION } = require("./config");
const model = require('./src/models/user.model');
const userRoutes = require("./src/routes/user");
app.use(bodyParser.urlencoded({ extended: false }));
// const cors = require("cors")
app.use(bodyParser.json());

// app.post('/create',(req, res)=> {

// 	try{
// 		const u = new model(req.body)
// 		u.save()
// 	} catch(e){
// 		console.error(e);
// 	}
// }

// )	

// app.use(cors()); Esto crashea el proyecto

// Endpoint del proyecto

app.use(`/api/${API_VERSION}`, userRoutes);
module.exports = app;