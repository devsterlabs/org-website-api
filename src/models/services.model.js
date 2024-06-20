const mongoose = require("mongoose");

const Services = new mongoose.Schema({
  title: {
    required: true,
    unique: true,
    type: String,
  },
});

const ServiceModel = mongoose.model("Service", Services);
module.exports = { ServiceModel };
