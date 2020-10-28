// load up the express framework and body-parser helper
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// create an instance of express to serve end points
const app = express();

// load up node's built in file system helper library.
const fs = require("fs");

// configure express instance with some body-parser settings including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

// this is where various routes will be handled from
const routes = require("./routes/route")(app, fs);

// launch server on port 3000.
const server = app.listen(4000, () => {
  console.log("server running on port 4000");
});
