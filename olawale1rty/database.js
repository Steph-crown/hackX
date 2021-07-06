const mongoose = require('mongoose');
const config = require("config");
const session = require('express-session');
const MongoDBStore = require('connect-mongo')(session);

let name = config.get("name")
let pass = config.get("pass")
mongoose.connect('mongodb+srv://' + name +':' + pass + '@hackx-ykqen.mongodb.net/test?retryWrites=true&w=majority', {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true})
	.then(()=> console.log("Database Connected Successfully"))
	.catch(err=>console.log(err));
	

//session in mongodb
var store = new MongoDBStore(
  {
    mongooseConnection: mongoose.connection
    
  },
  function(error) {
    // console.log(error);
  });
 
store.on('error', function(error) {
  console.log(error);
});

exports.store=store;