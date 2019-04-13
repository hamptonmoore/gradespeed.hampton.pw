var gradespeed = require("gradespeed-api-dodea");
var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/:schoolid/:username/:password", function(req,res){
	gradespeed.getBaseGrades(req.params.username, req.params.password, req.params.schoolid, function(grades) {
    		res.json(grades);
	});
});

app.get("/getAllIDs/:schoolid/:username/:password", function(req,res){
        gradespeed.getAllIDs(req.params.username, req.params.password, req.params.schoolid, function(grades) {
		res.json(grades)
        });
});

app.get('*', function(req, res){
   res.send("Please use the correct API path /schoolID/username/password");
});

app.listen(3010);
