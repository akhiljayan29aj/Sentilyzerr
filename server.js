// Importing Libraries
const express = require("express");
const Datastore = require("nedb");
const { response } = require("express");
var Twit = require("twit");
var Sentiment = require("sentiment");
var sentiment = new Sentiment();

var sent = { happy: 0, neutral: 0, sad: 0 };

var T = new Twit({
  consumer_key: "SwDQ4GSqA8WIlttQnVxMO4GuV",
  consumer_secret: "Yvpn5y8mGGAzRZW9jMmDjbJ0dJmkbxwfFoOBNR1Z5lxHvfHrxR",
  access_token: "837759716910596096-USg6DETZYYU2tlLOmi0hC7MG77hCFs0",
  access_token_secret: "HIyVrBP2taKx7RqprIxSgNuVHV0JczyjcWmAlhNj1lVue",
});

getTwitAnalysis();

setInterval(getTwitAnalysis, 1000 * 20);

function getTwitAnalysis() {
  T.get("search/tweets", { q: "covid", count: 100, lang: "en" }, function (
    err,
    data,
    response
  ) {
    if (err) {
      console.log(err);
    } else {
      sent = { happy: 0, neutral: 0, sad: 0 };

      for (let i = 0; i < data.statuses.length; i++) {
        let senti = sentiment.analyze(data.statuses[i].text);

        if (senti.score > 0) {
          sent.happy += 1;
        } else if (senti.score < 0) {
          sent.sad += 1;
        } else if (senti.score == 0) {
          sent.neutral += 1;
        }
      }
      console.log(sent);
    }
  });
}

// Storing express as a function in a variable app
const app = express();
// Setting up Listening port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening at ${port}`));
// Setting up static webpage
app.use(express.static("./public"));
// To be able to parse the data in json
app.use(express.json({ limit: "1mb" }));

// Creating and loading the database
const database = new Datastore("database.db");
database.loadDatabase();

// Saving the overall data into the database
// Needs to be done only once
// database.insert({ happy: 6105, neutral: 7393, sad: 2782 });

// Setting up route for the get request
app.get("/api", (request, response) => {
  database.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    }
    response.json(data);
  });
});

app.get("/twits", (request, response) => {
  response.json(sent);
});

// Setting up route the post request
app.post("/api", (request, response) => {
  // console.log(request.body);
  const data = request.body;
  database.insert(data);
  response.json(data);
});
