const { SubscribersController } = require("../controllers");

const router = require("express").Router();
const controller = new SubscribersController();
router.get("/", controller.getAll);
router.post("/", controller.post);
router.delete("/:id", controller.delete);

module.exports = { SubscribersRoute: router };
