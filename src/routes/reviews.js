const express = require("express");
const router = express.Router();
const { ReviewsController } = require("../controllers");
const handler = new ReviewsController();

router.get("/", handler.getAll);
router.get("/:id", handler.getById);
router.post("", handler.post);
router.put("/:id", handler.update);
router.delete("/:id", handler.delete);

module.exports = { ReviewsRoute: router };
