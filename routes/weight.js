const express = require("express");
const weight  = require("../models/weight");


// create router
const router = express.Router();


// http post
router.post("/", function(request, response) {

    weight.create(request, response);
});


// http get
router.get("/", function(request, response) {

    weight.read(request, response);
});


// http patch
router.patch("/:date", function(request, response) {

    weight.update(request, response);
});


// http delete
router.delete("/:date", function(request, response) {

    weight.destroy(request, response);
});


// exports
module.exports = router;
