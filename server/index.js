const express = require("express"),
  app = express(),
  cors = require("cors"),
  mongoose = require("mongoose");
mongoose.set("strictQuery", false);

require("dotenv").config();
const port = process.env.PORT || 4000;

app.use(cors());


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", '*');//https://filmix.vercel.app
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

async function connecting() {
  try {
    await mongoose.connect(process.env.MONGO, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("๐กConnected to the DB");
  } catch (e) {
    console.error("ERROR: Your DB is not running", e);
  }
}

connecting();


app.use("/users", require("./routes/usersRoute.js"));

app.use("/media2", require("./routes/mediaRoute2.js"));

app.use("/media", require("./routes/mediaRoute.js"));

app.listen(port, () => console.log(`๐๐๐ Server listening on port ${port}`));
