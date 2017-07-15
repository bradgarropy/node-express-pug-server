const fs = require("fs");


function create(weight, callback) {

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
            weights.push(weight);

            // write file
            fs.writeFile("./models/weight.json", JSON.stringify(weights, null, 4), callback(err, weight));
        }
    });
}


function read(callback) {

    // read file
    fs.readFile("./models/weight.json", callback);
}


function update(date, weight, callback) {

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
                return weight.date === date;
            });

            // update weight
            weights[index].weight = weight;

            // write file
            fs.writeFile("./models/weight.json", JSON.stringify(weights, null, 4), callback(err, weights[index]));
        }
    });
}


function destroy(date, callback) {

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
                if (weights[i].date === date) {
                    weights.splice(i, 1);
                    break;
                }
            }

            // write file
            fs.writeFile("./models/weight.json", JSON.stringify(weights, null, 4), callback);
        }
    });
}


// exports
exports.create  = create;
exports.read    = read;
exports.update  = update;
exports.destroy = destroy;
