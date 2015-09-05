var mongoose = require("mongoose");
var dbHost = "mongodb://localhost:27017/reaxtion";
mongoose.connect(dbHost);
var userSchema=mongoose.schema({
	user_id: {type:Number, index:true, unique:true},
	username: {type:String, index:true, unique:true},
	password: String,
	name: String
},{
	collection:"users"
});
var languageSchema=mongoose.schema({
	l_id: {type: String, index:true, unique:true},
	lname: String,
	videos: [
	{
		video_id: String
	}
	]
},{
	collection:"languages"
});
var videoSchema=mongoose.schema({
	l_id: String,
	video_id: {type:String, index:true, unique:true},
	video_desc: [
	{
		video_title: String,
		video_desc: String,
		video_url: String
	}
	]
},{
	collection:"videos"
});
module.exports.users = mongoose.model("users",userSchema);
module.exports.languages = mongoose.model("languages",languageSchema);
module.exports.videos = mongoose.model("videos",videoSchema);