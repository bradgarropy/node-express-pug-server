const bodyparser = require("body-parser");
const express    = require("express");
const weight     = require("./routes/weight");
const index      = require("./routes/index");


// create application
const app = express();


// pretty json
app.set("json spaces", 4);


// body parser
let bp_json = bodyparser.json();
let bp_urlencoded = bodyparser.urlencoded( {extended: true} );
app.use(bp_json);
app.use(bp_urlencoded);


app.get("/", function(request, response) {
    console.log(request.method + " " +  request.originalUrl);
    console.log(request.params);

    index.render(request, response);
});


app.get("/api/weight", function(request, response) {
    console.log(request.method + " " +  request.originalUrl);
    console.log(request.params);

    weight.read(request, response);
});


app.post("/api/weight", function(request, response) {
    console.log(request.method + " " +  request.originalUrl);
    console.log(request.params);

    weight.add(request, response);
});


app.patch("/api/weight/:date", function(request, response) {
    console.log(request.method + " " +  request.originalUrl);
    console.log(request.params);

    weight.update(request, response);
});


app.delete("/api/weight/:date", function(request, response) {
    console.log(request.method + " " +  request.originalUrl);
    console.log(request.params);

    weight.remove(request, response);
});


// start application
const port = 3000;
app.listen(port, function() {
    console.log("Server listening on port %s.", port);
});
