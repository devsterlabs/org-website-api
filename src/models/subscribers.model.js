const mongoose = require("mongoose");

const Subscribers = new mongoose.Schema({
  email: {
    required: true,
    unique: true,
    type: String,
  },
});

const SubscriberModel = mongoose.model("Subscriber", Subscribers);
module.exports = { SubscriberModel };
