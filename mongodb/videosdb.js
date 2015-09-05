var db = require("./dbSchemas.js")

var calls =
{
	videos_Find: function(filters, projection, options, callback) {
       db.videos.find(filters, projection, options, function(err, res) {
                      if (err) {
               callback(err, null);
           }
           callback(null, res);
       });
   },
   videos_Save: function(data, callback) {

       if (data)
           db.videos.create(data, function(err, res) {
               if (err) {
                   callback(err, null);
               }
               callback(null, res);
           });
       else {}
   },
     videos_update: function(match, update_data, options, callback) {
       db.videos.update(match, update_data, options, function(err, res) {
           if (err) {
               callback(err, null);
           }

           callback(null, res);
       });
   },
videos_Delete: function(match, options, callback) {
      console.log("w............",match);
        db.videos.remove(match, options, function(err, res) {
            console.log("3............",err);
            if (err) {
              console.log("4............",err);
                callback(err, null);
            }
            console.log("1............",res);
            callback(null, err);
        });
    }
};
module.exports = calls;