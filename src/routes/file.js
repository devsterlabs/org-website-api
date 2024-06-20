const express = require("express");
const router = express.Router();
const { FilesController } = require("../controllers");
const controller = new FilesController();

router.get("/:id", controller.getById);
router.post("/", controller.upload);
router.put("/:id", controller.update);

module.exports = { FileRoute: router };
