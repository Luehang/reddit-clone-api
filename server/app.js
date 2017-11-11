const hostname = "127.0.0.1";
const port = 4000;
const database = "reddit-clone";
const express = require('express');
const app = express();
const mongoose = require('mongoose');
import bodyParser from 'body-parser';

mongoose.connect(`mongodb://${hostname}/${database}`,
{ useMongoClient: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("open", function(ref) {
  console.log("Connected to mongo server.");
});
db.on("error", function(err) {
  console.log("Could not connect to mongo server.");
  console.error(err);
});

app.use(bodyParser.json());

const mainRoutes = require('./routes');
app.use('/api', mainRoutes);

app.listen(port, () => {
  console.log(`Running on http://${hostname}:${port}`);
});
