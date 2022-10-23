const express = require("express");

const router = express.Router();

const { handleGetContent, handlePostContent } = require("../controller/index");

// /content

router.get("/", handleGetContent);

router.post("/", handlePostContent);

module.exports = router;
