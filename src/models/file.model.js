const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema(
  {
    data: {
      type: Buffer,
      required: true,
    },
    mimetype: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const FileModel = mongoose.model("File", FileSchema);

module.exports = { FileModel };
