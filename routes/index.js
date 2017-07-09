const index = require("../views/index");
const fs    = require("fs");


function render(request, response) {

    // read file
    fs.readFile("./models/weight.json", function(err, data) {

        // check errors
        if(err) {
            console.log(err);
            throw err;
        }

        // carry on
        else {

            // convert to json
            let weights = JSON.parse(data);

            // render html table
            let html = index.render(weights);

            // send response
            response.send(html);
        }
    });

}


// exports
exports.render = render;
