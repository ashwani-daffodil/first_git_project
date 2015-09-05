var db = require("./dbSchemas.js")

var calls :
{
	users_Find: function(filters, projection, options, callback) {
       db.users.find(filters, projection, options, function(err, res) {
                      if (err) {
               callback(err, null);
           }
           callback(null, res);
       });
   },
   users_Save: function(data, callback) {

       if (data)
           db.users.create(data, function(err, res) {
               if (err) {
                   callback(err, null);
               }
               callback(null, res);
           });
       else {}
   },
     users_update: function(match, update_data, options, callback) {
       db.users.update(match, update_data, options, function(err, res) {
           if (err) {
               callback(err, null);
           }

           callback(null, res);
       });
   },
};

module.exports = calls;