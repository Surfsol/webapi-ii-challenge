interface for web api?
-uri(uniform resource identifier)
-url (unierversal resource locator)
-endpoint (very related to uri)

http is stateless


//to get a package.json
npm init -y 

//for gitignore
npx gitignore node

//from terminal can only run global packages
//so must put nodemon under scripts
npm run dev

//will run main file first
"main": "index.js",

//if want to install nodemon globally
npm i -g nodemon

REST
- set of guidelines to approach building apps
- everything is a resource
-single url per resource
- Resources are accessed through a single url, ex. index.js
- use HTTP METHODS to perform operations on resources


//functions have naumes => invoke a function 
//endpoint has a url    => send a request to an endpoint
- endpoint is a way to run f() in someones api

we pass data to a function as an arguement 
we can pass data to endpoint (body, url parameter, query string, header)

a f() can return a value and an endpoint can return a response

//to export
module.exports= router


routing engine needs uri and http handler

sub-routing
good when something belongs in something else


