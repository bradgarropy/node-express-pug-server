# Web Server & REST API Using Node, Express & pug

*Learning about the world of JavaScript can be incredibly daunting.  
Learning [Node](https://nodejs.org/) is even worse.*

Carrying on to the third iteration of the [node-only-server](https://github.com/bradgarropy/node-only-server)! I improved the front end by incorporating an HTML templating module. I looked into both [handlebars](http://handlebarsjs.com/) and [pug](https://pugjs.org/), and ultimately decided on [pug](https://pugjs.org/).

Data model is still crap, as I'm just using file I/O rather than a database.


## Lessons Learned

Fortunately I was already familiar with HTML templating from a blog I wrote using [Jekyll](https://jekyllrb.com/) and [Liquid](https://shopify.github.io/liquid/). In this case, the challenge came from sorting through all the available templating engines for JavaScript and picking my favorite.

I implemented my index view with both [handlebars](http://handlebarsjs.com/) and [pug](https://pugjs.org/). At the outset they seemed nearly equivalent, the primary difference coming from the fact that [pug](https://pugjs.org/) doesn't use tags and relies on indentation. But as soon as I began using template partials and inheritance to modularize the HTML, it was clear that [handlebars](http://handlebarsjs.com/) was severely lagging behind.

So I ultimately chose [pug](https://pugjs.org/), which as a bonus is the default view engine for [Express](https://expressjs.com/).

Now that my HTML generation is super slick, I really need to improve my archaic data model by incorporating a database into the project!


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
