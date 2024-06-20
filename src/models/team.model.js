const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    links: [
      {
        url: { type: String },
        site: { type: String },
      },
    ],

    image: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "File",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const TeamModel = mongoose.model("Team", TeamSchema);

module.exports = { TeamModel };
