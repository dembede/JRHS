const express = require("express");
const router = express.Router();
const News = require("../models/news");

// getting all
router.get("/", async (req, res) => {
  try {
    const articles = await News.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// getting one
router.get("/:id", getNewsArticle, (req, res) => {
  res.send(res.news);
});

// creating one
router.post("/", async (req, res) => {
  const news = new News({
    articleId: req.body.articleId,
    title: req.body.title,
    description: req.body.description,
    story: req.body.story,
    articleDate: req.body.articleDate,
    photo: req.body.photo,
    caption: req.body.caption,
    video: req.body.video,
    author: req.body.author,
    section: req.body.section,
    location: req.body.location,
    subjects: req.body.subjects,
    keywords: req.body.keywords,
    language: req.body.language,
    link: req.body.link,
  });

  try {
    const latestNews = await news.save();
    res.status(201).json(latestNews);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// updating one
router.patch("/:id", getNewsArticle, async (req, res) => {
  if (req.body.title != null) {
    res.news.title = req.body.title;
  }
  if (req.body.excerpt != null) {
    res.news.excerpt = req.body.excerpt;
  }
  try {
    const newsUpdate = await res.news.save();
    res.json(newsUpdate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// deleting one
router.delete("/:id", getNewsArticle, async (req, res) => {
  try {
    await res.news.remove();
    res.status(200).json({ message: "Deleted article" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

async function getNewsArticle(req, res, next) {
  /** Middlewear function to find article in database */
  let news;
  try {
    news = await News.findById(req.params.id);
    if (news == null) {
      return res.status(404).json({ message: "Cannot find article" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.news = news;
  next(); // call next() function to proceed
}

module.exports = router;
