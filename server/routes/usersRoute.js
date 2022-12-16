const router = require("express").Router();
const controller = require("../controllers/usersController").default;

router.post("/register", controller.register);
router.post("/login", controller.login);
router.post("/verify_token", controller.verify_token);

module.exports = router;
