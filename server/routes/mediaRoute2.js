const router = require('express').Router();
const controller = require("../controllers/mediaController2");

router.post("/search", controller.search);

router.post("/trending", controller.trending);

router.post("/fetch", controller.fetch);


module.exports = router;
