const { ClientController } = require("../controllers");

const router = require("express").Router();
const controller = new ClientController();
router.get("/", controller.getAll);
router.get("/:title", controller.get);
router.post("/", controller.post);
router.delete("/:id", controller.delete);

module.exports = { ClientRoute: router };
