var express = require('express');
var router = express.Router();
var pg = require('pg');

var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/chick_orders';

// **********
// GETTING THE ACTIVE DATES
// **********
router.get('/', function(req,res){
  results = [];
  pg.connect(connectionString, function(err, client){
    var query = client.query("SELECT * FROM dates WHERE active = true");

    query.on('row', function(row){
      results.push(row);
    });

    query.on('end', function(){
      client.end();
      return res.json(results);
    });

      if(err){
        console.log("Error in data request: ", err);
      }
    });
});

// **********
// POSTING A NEW DATE
// **********
router.post('/', function(req, res){
  pg.connect(connectionString, function(err, client){
    client.query("INSERT INTO dates (date, active) VALUES ($1, $2)", [req.body.date, true],
    function(err, response){
      if (err){
        console.log("Error in post: ", err);
      } else {
        client.end();
        res.send(response);
      }
    });
  });
});





module.exports = router;
