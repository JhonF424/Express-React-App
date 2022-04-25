const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { API_VERSION } = require("./config");
const model = require('./src/models/user.model');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/create',(req, res)=> {

	try{
		const u = new model(req.body)
		u.save()
	} catch(e){
		console.error(e);
	}
}

)	

module.exports = app;