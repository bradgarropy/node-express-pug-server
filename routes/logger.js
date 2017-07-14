const _ = require("lodash");


function log(request, response, next) {

    // log request
    console.log(request.method + " " +  request.originalUrl);

    // log body if it exists
    if(!_.isEmpty(request.body)) {
        console.log(request.body);
    }

    next();
}


// exports
exports.log = log;
