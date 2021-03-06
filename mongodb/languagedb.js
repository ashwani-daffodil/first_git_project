var db = require("./dbSchemas.js")

var calls =
{
	language_Find: function(filters, projection, options, callback) {
       db.languages.find(filters, projection, options, function(err, res) {
                      if (err) {
               callback(err, null);
           }
           callback(null, res);
       });
   },
   language_Save: function(data, callback) {

       if (data)
           db.languages.create(data, function(err, res) {
               if (err) {
                   callback(err, null);
               }
               callback(null, res);
           });
       else {}
   },
     language_update: function(match, update_data, options, callback) {
       db.languages.update(match, update_data, options, function(err, res) {
           if (err) {
               callback(err, null);
           }

           callback(null, res);
       });
   },
   language_Delete: function(match, options, callback) {
      console.log("w............",match);
        db.languages.remove(match, options, function(err, res) {
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