const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  name: String,
  img: String,
  color: String,
  cost: Number,
  damage: String,
  date: { type: Date, default: Date.now }
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
