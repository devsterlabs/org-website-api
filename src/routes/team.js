const express = require("express");
const router = express.Router();
const { TeamController } = require("../controllers");
const handler = new TeamController();

router.get("/", handler.getAll);
router.get("/:id", handler.getById);
router.post("/", handler.post);
router.put("/:id", handler.update);
router.delete("/:id", handler.delete);

module.exports = { TeamRoute: router };
