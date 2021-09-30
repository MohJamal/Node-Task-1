const express = require("express");

const app = express();

const array = [
  {
    name: "bmw",
    color: "red",
  },
  {
    name: "toyota",
    color: "green",
  },
  {
    name: "mercedes",
    color: "black",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/json", (req, res) => {
  res.json(array);
});

app.get("/params", (req, res) => {
  const { name, color } = req.query;

  const filteredArr = array.filter(
    (car) => car.name.includes(name) && car.color.includes(color)
  );

  res.json(filteredArr);
});

app.listen("3000", () => {
  console.log("Server Started");
});
