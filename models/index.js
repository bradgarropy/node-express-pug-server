const fs = require("fs");


function render(callback) {

    // read file
    fs.readFile("./models/weight.json", callback);
}


// exports
exports.render = render;
