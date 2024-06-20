const express = require("express");
const app = express();
const cors = require("cors");
const path = require("node:path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const PORT = process.env.PORT || 4000;
const db = require("./db");
const { router } = require("./routes");
const fileUpload = require("express-fileupload");

app.use(cors());
app.use(express.json());
app.use(fileUpload());

app.get("/", (req, res) => {
  res.status(200).send("Devster Labs API (V1.0)");
});

app.use("/", router);

if (process.env.NODE_ENV === "local") {
  app.listen(PORT, () => {
    console.log("Connecting to database....");
    db.on("open", () => {
      console.log("Database connected");
      console.log(`Server started on port ${PORT}`);
    });
    db.on("error", (err) => {
      console.log(err);
    });
  });
}

module.exports = app;
