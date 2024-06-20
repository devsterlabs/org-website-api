const express = require("express");
const router = express.Router();
const { FilesController } = require("../controllers");
const { auth } = require("../middlewares");
const controller = new FilesController();

router.get("/:id", controller.getById);
router.post("/", auth, controller.upload);
router.put("/:id", auth, controller.update);

module.exports = { FileRoute: router };
