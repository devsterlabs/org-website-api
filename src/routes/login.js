const express = require("express");
const router = express.Router();
const { LoginController } = require("../controllers");
const controller = new LoginController();

router.post("/", controller.login);

module.exports = { LoginRoute: router };
