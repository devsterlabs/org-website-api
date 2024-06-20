const { ServicesController } = require("../controllers");

const router = require("express").Router();
const controller = new ServicesController();
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.post);
router.delete("/:id", controller.delete);
router.put("/:id", controller.update);

module.exports = { ServicesRoute: router };
