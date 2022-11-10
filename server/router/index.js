const express = require("express");

const router = express.Router();

const { handleGetContent, handleCreatePost } = require("../controller/index");

// /content

router.get("/", handleGetContent);

router.post("/create-content", handleCreatePost);

module.exports = router;
