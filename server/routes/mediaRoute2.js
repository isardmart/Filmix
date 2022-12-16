const router = require("../../client/node_modules/@types/express").Router();
const controller = require("../controllers/mediaController2");

router.post("/search", controller.search);

router.get("/trending", controller.trending);

module.exports = router;
