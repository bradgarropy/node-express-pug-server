const express = require("express");
const index   = require("../models/index");


// create router
const router = express.Router();


// http get
router.get("/", function(request, response) {

    index.render(request, response);
});


// exports
module.exports = router;
