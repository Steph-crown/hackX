const config = require("config");
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const logger = require('morgan');
const fs = require('fs');
const path = require('path');
const errorHandler = require('./auto/error-handler');

const app = express();
module.exports = app.listen(3000);
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({exteneded:true}));

app.use(cors());
app.use(cookieParser());

const { store } = require('./database');

//use config module to get the privatekey, if no private key set, end the application
if (!config.get("secret")) {
  console.error("FATAL ERROR: secret is not defined.");
  process.exit(1);
}


//logging details
logger.token('host', (req, res)=>{
	return req.hostname;
});
let accessLogStream = fs.createWriteStream(path.join(__dirname, 'hackx.log'),{flags: 'a'});
app.use(logger('[:date[web]] :method :host :url :status :res[content-length] - :response-time ms',{ stream: accessLogStream})); 
app.use(logger('dev'));

//api call
const users = require("./api/users");
app.use('/',users);

app.get('/logs',(req, res)=>{
	fs.readFile('hackx.log', function(err, data) {
    res.send(data); 
  });	
});

//public files
app.use(express.static(path.join(__dirname,'/public')));

//welcome page
app.get(['/','/index.html'],(req, res)=>{
	res.sendFile(path.join(__dirname,'/public/ecx.html'));
})

app.use(errorHandler);

//listen 
app.listen(port, ( ) => {
    console.log(`The server is running on ${port}`);
})