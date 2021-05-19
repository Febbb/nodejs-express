

const express = require('express');
const app = express();
const server = require('http').createServer(app);
const body = require('body-parser');




app.set('view engine','ejs');
app.set('views',__dirname + '/views');
app.use(express.static('publik'));
app.use(body.urlencoded({extended:false}));



const Router = require("./routes/Router");
app.use("/",Router);



server.listen(3010,function(){
	console.log("server listening port 3010");
});
