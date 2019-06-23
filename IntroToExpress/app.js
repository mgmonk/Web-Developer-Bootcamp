const express = require("express");
const app = express();

// "/" => "Hi there!"
app.get("/", (req, res) => {
    res.send("Hi there");
});

// "/bye" => "Goodbye!"
app.get("/bye", (req, res) => {
    res.send("Goodbye!");
});

//  "/dog" => "MEOW!"
app.get("/dog", (req, res) => {
    res.send("MEOW!");
});

app.get("/r/:sub", (req, res) => {
    res.send("Welcome to a subreddit!");
});

app.get("*", (req, res) => {
    res.send("You are a star!");
});

app.listen(3000, () => console.log("Listening on port 3000."));