const bodyParser = require("../client/node_modules/@types/body-parser");
const path = require("path");

const express = require("../client/node_modules/@types/express"),
  app = express(),
  cors = require("cors"),
  mongoose = require("mongoose");
mongoose.set("strictQuery", false);

require("dotenv").config();
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

async function connecting() {
  try {
    await mongoose.connect(process.env.MONGO, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("💡Connected to the DB");
  } catch (e) {
    console.error("ERROR: Your DB is not running", e);
  }
}

connecting();

app.use(cors());

app.use("/users", require("./routes/usersRoute.js"));

app.use("/media", require("./routes/mediaRoute.js"));
app.use("/media2", require("./routes/mediaRoute2.js"));

app.listen(port, () => console.log(`🚀🚀🚀 Server listening on port ${port}`));
