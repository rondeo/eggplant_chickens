var express = require('express');
var router = express.Router();
var pg = require('pg');

var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/chick_orders';

//POSTING THE FORM INPUT
router.post('/', function(req, res){
  var upload = req.body;
  pg.connect(connectionString, function(err, client){
    client.query("INSERT INTO orders (firstname, lastname, phonenumber, email, chickorderdate, americauna, bufforpington, barredrock, australorp, silverwyandotte, californiawhite,rhodeislandred, goldstar) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)", [upload.firstname, upload.lastname, upload.phonenumber, upload.email, upload.chickorderdate, upload.americauna, upload.bufforpington, upload.barredrock, upload.australorp, upload.silverwyandotte, upload.californiawhite, upload.rhodeislandred, upload.goldstar],
    function( err, response){
      if(err){
        console.log("Error in data upload: ", err);
      } else {
        console.log("The response: ", response);
        client.end();
        res.send(response);
      }
    }
    );
  });
});

module.exports = router;
