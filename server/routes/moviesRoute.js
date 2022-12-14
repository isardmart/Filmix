const router = require("express").Router();
const controller = require("../controllers/moviesController");

router.post('/search',controller.search);


module.exports = router;
