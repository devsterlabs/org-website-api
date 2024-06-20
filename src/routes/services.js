const { ServicesController } = require("../controllers");
const { auth } = require("../middlewares");

const router = require("express").Router();
const controller = new ServicesController();
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", auth, controller.post);
router.delete("/:id", auth, controller.delete);
router.put("/:id", auth, controller.update);

module.exports = { ServicesRoute: router };
