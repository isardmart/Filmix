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
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.json({ ok: false, message: "All fields required" });
  if (!validator.isEmail(email))
    return res.json({ ok: false, message: "Email invalid" });
  try {
    const user = await users.findOne({ email });
    if (!user) return res.json({ ok: false, message: "Invalid credentials" });
    const match = await argon2.verify(user.password, password);
    if (match) {
      const token = jwt.sign(user.toJSON(), jwt_secret, { expiresIn: "1h" });
      res.json({ ok: true, message: "Welcome Back", token, email });
    } else {
      return res.json({ ok: false, message: "Invalid credentials" });
    }
  } catch (e) {
    res.json({ ok: false, message: "Something went wrong", e });
  }
};

const verify_token = (req, res) => {
  const token = req.headers.authorization;
  jwt.verify(token, jwt_secret, (e, succ) => {
    e
      ? res.json({ ok: false, message: "Something went wrong" })
      : res.json({ ok: true, succ });
  });
};
module.exports = { register, login , verify_token};
