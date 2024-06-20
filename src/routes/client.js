const { ClientController } = require("../controllers");
const { auth } = require("../middlewares");

const router = require("express").Router();
const controller = new ClientController();
router.get("/", controller.getAll);
router.get("/:title", controller.get);
router.post("/", auth, controller.post);
router.delete("/:id", auth, controller.delete);

module.exports = { ClientRoute: router };
