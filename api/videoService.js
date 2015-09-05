var express = require("express");
var url = require("url");
var router = express.Router();
var videos = require("./../mongodb/videosdb");

router.get("/view_videos/" , function(req , res ,next){
	var query = url.parse(req.url,true).query;
	// console.log("Query :", query);
	var filters = query.filters ? JSON.parse(query.filters) : {};
	var projection = query.projection ? JSON.parse(query.projection) : {};
	var options = query.options ? JSON.parse(query.options) : {};
	videos.videos_Find(filters, projection, options, function(err,result){
		if(err) {
			res.send(err);
		}
		res.send(result);
	});
});
router.post("/add_videos" , function(req , res ,next){
	var json = req.body;
	videos.videos_Save(json,function(err,result){
		if(err){
			res.send(err);
		}
		res.send(result);
	});
});
router.delete("/del_videos" , function(req , res ,next){
	console.log('In delete');
	var json = req.body;
	var match = json.match ? json.match : {};
	var options = json.options ? json.options : {};
	/*console.log("5............",match);
	console.log("6............",options);*/
	videos.videos_Delete(match, function(err,result){
		if(err){
			// console.log("7............",err);
			res.send(err);
		}
		// console.log("8............",result);
		res.send(result);
	});
});
router.put("/update_videos" , function(req , res ,next){
	var json = req.body;
	var match = json.match ? json.match : {};
	var update_data = json.update_data ? json.update_data : {};
	var options = json.options ? json.options : {};
	videos.videos_Update(match , update_data , options , function(err,result){
		if(err){
			res.send(err);
		}
		res.send(result);
	});
});

module.exports = router;