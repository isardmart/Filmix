const router = require("express").Router();
const controller = require("../controllers/mediaController");

router.post('/search',controller.search);


module.exports = router;
