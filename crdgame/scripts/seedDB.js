const mongoose = require("mongoose");
const db = require("../models");

// This file empties the cards collection and inserts the cards below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const cardSeed = [
  {
    name: "The Dead Zone",
    img: "#",
    color: "green",
    cost: 3,
    damage: "3",
    date: new Date(Date.now())
  }
];

db.Card
  .remove({})
  .then(() => db.Card.collection.insertMany(cardSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
