const { SubscribersController } = require("../controllers");
const { auth } = require("../middlewares");

const router = require("express").Router();
const controller = new SubscribersController();
router.get("/", auth, controller.getAll);
router.post("/", controller.post);
router.delete("/:id", auth, controller.delete);

module.exports = { SubscribersRoute: router };
