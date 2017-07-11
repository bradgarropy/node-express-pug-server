const fs = require("fs");


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

            // send response
            response.render("index", { weights: weights });
        }
    });
}


// exports
exports.render = render;
