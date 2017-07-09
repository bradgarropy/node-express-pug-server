const fs = require("fs");


function read(request, response) {

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
            data = JSON.parse(data);

            // send response
            response.json(data);
        }
    });
}


function add(request, response) {

    // TODO: Validate body data.

    // convert weight to int
    request.body.weight = parseInt(request.body.weight);

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

            // add new weight
            weights.push(request.body);

            // write file
            fs.writeFile("./models/weight.json", JSON.stringify(weights, null, 4), function(err) {

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
        }
    });
}


function update(request, response) {

    // TODO: Validate body data.

    // convert weight to int
    request.body.weight = parseInt(request.body.weight);

    // TODO: Validate url date.

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

            // find index of object
            let index = weights.findIndex(function(weight) {
                return weight.date === request.params.date;
            });

            // update weight
            weights[index].weight = request.body.weight;

            // write file
            fs.writeFile("./models/weight.json", JSON.stringify(weights, null, 4), function(err) {

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
        }
    });
}


function remove(request, response) {

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

            // find and remove date
            for(let i = 0; i < weights.length; i++) {
                if (weights[i].date === request.params.date) {
                    weights.splice(i, 1);
                    break;
                }
            }

            // write file
            fs.writeFile("./models/weight.json", JSON.stringify(weights, null, 4), function(err) {

                // catch error
                if (err) {
                    console.log(err);
                    throw err;
                }

                // carry on
                else {
                    // send response
                    response.json(weights);
                }
            });
        }
    });
}


// exports
exports.read   = read;
exports.add    = add;
exports.update = update;
exports.remove = remove;
