var express = require('express');
var app = express();
// var path = require('path');
// var bodyParser = require('body-parser');

//Routes
var index = require('./routes/index.js');
//var chickform = require('./routes/chickform.js');


app.set("port", (process.env.PORT || 5000));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({expanded: true}));

app.use("/", index);
// app.use("/chickform", chickform);


app.listen(app.get("port"), function() {
  console.log("Application running on port: ", + app.get("port"));
});

module.exports = app;
