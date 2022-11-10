const express = require("express");
const cors = require("cors");

const mongoConnetion = require("./config/mongoConfig");
const contentRouter = require("./router/index");
const registerRouter = require("./router/register");
const cookieParser = require("cookie-parser");
const app = express();
const port = process.env.PORT || 3030;
app.use(cors());
require("dotenv").config({ path: "./config/config.env" });
app.use(express.json());

app.use("/content", contentRouter);
app.use("/", registerRouter);
app.get("*", (req, res) => {
  res.status(404).send("not found");
});

async function Start() {
  try {
    mongoConnetion();
    app.listen(port, () => {
      console.log("hello server is runnig on port 3030 !!");
    });
  } catch (error) {
    console.log(`from StartF ||${error}`);
  }
}
Start();
