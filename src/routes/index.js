const { ClientRoute } = require("./client");
const { ServicesRoute } = require("./services");
const { ReviewsRoute } = require("./reviews");
const { SubscribersRoute } = require("./subscribers");
const { FileRoute } = require("./file");
const { TeamRoute } = require("./team");
const { LoginRoute } = require("./login");

const router = require("express").Router();
router.use("/client", ClientRoute);
router.use("/services", ServicesRoute);
router.use("/reviews", ReviewsRoute);
router.use("/subscribers", SubscribersRoute);
router.use("/file", FileRoute);
router.use("/team", TeamRoute);
router.use("/login", LoginRoute);

module.exports = { router };
