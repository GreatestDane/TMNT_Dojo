// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");
var bodyParser = require("body-parser");
var http = require("http");
var fs = require("fs");
var path = require("path");
var serveStatic = require("serve-static");
var turtles = require("./app/public/data/turtles.js")

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pretty standard.

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
// Create the path to look at our public file?
// app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + "/app/public"));

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

// require("./app/routing/apiRoutes")(app);
// require("./app/routing/htmlRoutes")(app);

// HTML ROUTES

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/home.html"));
});

app.get("/don1", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/don1.html"));
});

// API ROUTES

app.get("/api/turtles", function(req, res) {
  res.json(turtles);
});

// ==============================================================================
// LISTENER
// The below code effectively "starts" our server
// ==============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});