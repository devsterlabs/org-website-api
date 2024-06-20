const mongoose = require("mongoose");

const Reviews = new mongoose.Schema({
  client_name: {
    required: true,
    type: String,
  },
  comment: {
    required: true,
    type: String,
  },
  rating: {
    required: true,
    type: Number,
  },
  url: {
    required: true,
    type: String,
  },
});

const ReviewModel = mongoose.model("Review", Reviews);
module.exports = { ReviewModel };
