const express = require("express");
const router = express.Router();
const { ReviewsController } = require("../controllers");
const { auth } = require("../middlewares");
const handler = new ReviewsController();

router.get("/", handler.getAll);
router.get("/:id", handler.getById);
router.post("", auth, handler.post);
router.put("/:id", auth, handler.update);
router.delete("/:id", auth, handler.delete);

module.exports = { ReviewsRoute: router };
