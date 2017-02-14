var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//Routes
var index = require('./routes/index');
var orders = require('./routes/orders');
var dates = require('./routes/dates');

app.set("port", (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded: true}));

app.use("/dates", dates);
app.use("/orders", orders);
app.use("/", index);

app.listen(app.get("port"), function() {
    console.log("Application running on port: " + app.get("port"));
});

// module.exports = app;
