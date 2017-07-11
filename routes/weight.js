const express = require("express");
const weight  = require("../models/weight");

const router = express.Router();


router.get("/", function(request, response) {
    console.log(request.method + " " +  request.originalUrl);

    weight.read(request, response);
});


router.post("/", function(request, response) {
    console.log(request.method + " " +  request.originalUrl);

    weight.add(request, response);
});


router.patch("/:date", function(request, response) {
    console.log(request.method + " " +  request.originalUrl);

    weight.update(request, response);
});


router.delete("/:date", function(request, response) {
    console.log(request.method + " " +  request.originalUrl);

    weight.remove(request, response);
});


module.exports = router;
