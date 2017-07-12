# Web Server & REST API Using Node & Express

*Learning about the world of JavaScript can be incredibly daunting.  
Learning [Node](https://nodejs.org/) is even worse.*

<!-- TODO: Fill out this section. -->


## Lessons Learned

<!-- TODO: Fill out this section. -->


## Project Iterations

1. [node-only-server](https://github.com/bradgarropy/node-only-server)
2. [node-express-server](https://github.com/bradgarropy/node-express-server)
3. [node-express-pug-server](https://github.com/bradgarropy/node-express-pug-server)
4. [node-express-pug-mongo-server](https://github.com/bradgarropy/node-express-pug-mongodb-server)


## Features

This simple web application tracks weight measurements. It implements the following HTTP methods:

* GET
* POST
* PATCH
* DELETE

It also offers one page, the index, which shows the current weight entries.


## Usage

First, clone down the repository. Next, run the following command from inside the directory:

`npm start` or `node server`

In order to access the index page, navigate to `localhost:3000` in your browser.


## REST API

Use your favorite REST client, mine is [Postman](https://www.getpostman.com/), to send requests to the server.

### Retrieve Weight Entries
```
GET /api/weight
```

### Add Weight Entry
```
POST /api/weight  
Parameters: { "date": "2017-05-17", "weight": 180 }
```

### Update Weight Entry
```
PATCH /api/weight/:date  
Parameters: { "weight": 180 }
```

### Remove Weight Entry
```
DELETE /api/weight/:date
```
