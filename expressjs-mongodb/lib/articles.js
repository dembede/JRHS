const fetch = require("node-fetch");
const newsUrl = process.env.NEWS_ARTICLES_URL;
const localNewsUrl = "http://localhost:3000/news";

async function fetchNewsArticles() {
  const res = await fetch(newsUrl);
  const articles = await res.json();

  await articles.map((article, index) => {
    if (index < 10) {
      saveNewsArticle(article);
    }
  });
  console.log("Saved articles to database");
}

async function saveNewsArticle(article) {
  try {
    const res = await fetch(localNewsUrl, {
      method: "POST",
      body: JSON.stringify({
        articleId: article.articleId,
        title: article.title,
        description: article.description,
        story: article.story,
        articleDate: article.articleDate,
        photo: article.photo,
        caption: article.caption,
        video: article.video,
        author: article.author,
        section: article.section,
        location: article.location,
        subjects: article.subjects,
        keywords: article.keywords,
        language: article.language,
        link: article.link,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await res.json();
  } catch (error) {
    console.log(error);
  }
}

module.exports = fetchNewsArticles;
