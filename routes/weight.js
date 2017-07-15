const express = require("express");
const Weight  = require("../models/weight");


// create router
const router = express.Router();


// http post
router.post("/", function(request, response) {

    Weight.create(request.body, function(err, weights) {

        // check errors
        if(err) {
            console.log(err);
            throw err;
        }

        // carry on
        else {
            // send response
            response.json(weights);
        }
    });
});


// http get
router.get("/", function(request, response) {

    Weight.read(function(err, weights) {

        // check errors
        if(err) {
            console.log(err);
            throw err;
        }

        // carry on
        else {

            // convert to json
            weights = JSON.parse(weights);

            // send response
            response.json(weights);
        }
    });
});


// http patch
router.patch("/:date", function(request, response) {

    Weight.update(request.params.date, request.body.weight, function(err, weight) {

        // check errors
        if(err) {
            console.log(err);
            throw err;
        }

        // carry on
        else {
            // send response
            response.json(weight);
        }
    });
});


// http delete
router.delete("/:date", function(request, response) {

    Weight.destroy(request.params.date, function(err) {

       // catch error
       if (err) {
           console.log(err);
           throw err;
       }

       // carry on
       else {
           // send response
           response.json();
       }
   });
});


// exports
module.exports = router;
