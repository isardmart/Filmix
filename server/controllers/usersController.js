const users = require("../models/usersModel.js"),
  argon2 = require("argon2"),
  jwt = require("jsonwebtoken"),
  validator = require("validator"),
  jwt_secret = process.env.JWT_SECRET;

const register = async (req, res) => {
  const { email, password, password2 } = req.body;
  if (!email || !password || !password2)
    return res.json({ ok: false, message: "All fields required" });
  if (password !== password2)
    return res.json({ ok: false, message: "Password must match" });
  if (!validator.isEmail(email))
    return res.json({ ok: false, message: "Email invalid" });
  try {
    const user = await users.findOne({ email });
    if (user) res.json({ ok: false, message: "Invalid credentials" });
    const hash = await argon2.hash(password);
    const newUser = {
      email,
      password: hash,
    };
    await users.create(newUser);
    res.json({ ok: true, message: "Registered successfully" });
  } catch (e) {
    res.json({ ok: false, message: "Something went wrong", e });
  }
};

module.exports = {register};
