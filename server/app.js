const express = require("express");
const cors = require("cors");

const mongoConnetion = require("./config/mongoConfig");
const contentRouter = require("./router/index");
const app = express();
app.use(cors());

app.use(express.json());

app.use("/content", contentRouter);

async function Start() {
  try {
    mongoConnetion();
    app.listen(3030, () => {
      console.log("hello server is runnig on port 3030 !!");
    });
  } catch (error) {
    console.log(`from StartF ||${error}`);
  }
}
Start();
