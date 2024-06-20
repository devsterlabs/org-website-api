const mongoose = require("mongoose");

const Clients = new mongoose.Schema(
  {
    title: {
      required: true,
      unique: true,
      type: String,
    },
    data: {
      type: Buffer,
    },
    mimetype: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const ClientModel = mongoose.model("Client", Clients);
module.exports = { ClientModel };
