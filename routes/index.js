const express = require("express");
const index   = require("../models/index");


// create router
const router = express.Router();


// http get
router.get("/", function(request, response) {

    index.render(function(err, data) {

        // check errors
        if(err) {
            console.log(err);
            throw err;
        }

        // carry on
        else {

            // convert to json
            let weights = JSON.parse(data);

            // send response
            response.render("index", {weights: weights});
        }
    });
});


// exports
module.exports = router;
