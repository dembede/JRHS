const express = require("express");
const router = express.Router();
const News = require("../models/news");

// getting all
router.get("/", async (req, res) => {
  try {
    const articles = await News.find();
    res.json(articles);
  } catch (error) {
    console.log("Nothing found");
    res.status(500).json({ message: error.message });
  }
});

// getting one
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

// creating one
router.post("/", (req, res) => {});

// updating one
router.patch("/:id", (req, res) => {
  // req.params.id;
});

// deleting one
router.delete("/:id", (req, res) => {
  // req.params.id;
});

module.exports = router;
