var express = require("express");
var url = require("url");
var router = express.Router();
var users = require("./../mongodb/usersdb");

router.get("/view_users/" , function(req , res ,next){
	var query = url.parse(req.url,true).query;
	console.log("Query :", query);
	var filters = query.filters ? JSON.parse(query.filters) : {};
	var projection = query.projection ? JSON.parse(query.projection) : {};
	var options = query.options ? JSON.parse(query.options) : {};
	users.users_Find(filters, projection, options, function(err,result){
		if(err) {
			res.send(err);
		}
		res.send(result);
	});
});
router.post("/add_users" , function(req , res ,next){
	var json = req.body;
	users.users_Save(json,function(err,result){
		if(err){
			res.send(err);
		}
		res.send(result);
	});
});
router.put("/update_users" , function(req , res ,next){
	var json = req.body;
	var match = json.match ? json.match : {};
	var update_data = json.update_data ? json.update_data : {};
	var options = json.options ? json.options : {};
	users.users_Update(match , update_data , options , function(err,result){
		if(err){
			res.send(err);
		}
		res.send(result);
	});
});

module.exports = router;