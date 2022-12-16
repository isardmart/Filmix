const router = require("../../client/node_modules/@types/express").Router();
const controller = require("../controllers/mediaController");

router.post("/search", controller.search);

module.exports = router;
