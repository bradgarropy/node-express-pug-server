const express = require("express");
const index   = require("../models/index");

const router = express.Router();


router.get("/", function(request, response) {
    console.log(request.method + " " +  request.originalUrl);

    index.render(request, response);
});


module.exports = router;
