import { format, formatDistanceToNow } from "date-fns";
import slugify from "slugify";

const POSTS_ENDPOINT = "https://dummyjson.com/posts";
const NEWS_ARTICLES_ENDPOINT = "https://nation.africa/news-json-feed.json";
import LOCAL_NEWS_ARTICLES from "../server/news.json";
import LOCAL_NEWS_TEASERS from "../server/news-teasers.json";

const fs = require("fs");

export async function fetchPosts() {
  const res = await fetch(NEWS_ARTICLES_ENDPOINT);
  const data = await res.json();
  const posts = await data.map((item) => newsArticleModel(item));

  const fewPosts = Object.entries(posts)
    .slice(0, 2)
    .map((entry) => entry[1]);

  return fewPosts;
}

export async function fetchPost(id) {
  const res = await fetch(`${POSTS_ENDPOINT}/${id}`);
  const post = await res.json();
  return post;
}

export async function getAllLocalArticleIds() {
  const posts = await fetchLocalNewsArticles();
  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));
  return paths;
}

export async function fetchNewsArticles() {
  const res = await fetch(NEWS_ARTICLES_ENDPOINT);
  const data = await res.json();

  const articles = await data.map((item) => newsArticleModel(item));
  const teasers = await data.map((item) => newsArticleTeaserModel(item));

  const articlesStr = JSON.stringify(articles.slice(0, 2));
  const teasersStr = JSON.stringify(teasers.slice(0, 2));

  const articlePath = "./server/news.json";
  const teaserPath = "./server/news-teasers.json";

  /** Uncomment below to save new files */
  saveData(articlePath, articlesStr);
  saveData(teaserPath, teasersStr);

  return teasers.slice(0, 50);
}

export async function fetchLocalNewsArticles() {
  return LOCAL_NEWS_ARTICLES;
}

export async function fetchLocalNewsArticle(id) {
  const article = LOCAL_NEWS_ARTICLES.filter((article) => article.id == id)[0];
  return article;
}

function newsArticleModel(data) {
  const date = data.articleDate;
  const articleDate = format(new Date(date), "dd MMM, yyyy");
  const arrTags = data.tags ? data.tags.split(",") : [];

  return {
    id: data.articleId,
    title: data.title,
    excerpt: data.description,
    body: data.story,
    link: data.link,
    slug: slugify(data.title),
    date: date,
    articleDate: articleDate,
    timeAgo: asTimeAgo(date),
    tags: arrTags,
    photo: data.photo || "",
    caption: data.caption || "",
    video: data.video || "",
    author: data.author || [],
  };
}

function newsArticleTeaserModel(data) {
  const date = data.articleDate;
  const articleDate = format(new Date(date), "dd MMM, yyyy");

  return {
    id: data.articleId,
    title: data.title,
    excerpt: data.description,
    link: data.link,
    slug: slugify(data.title),
    date: date,
    articleDate: articleDate,
    timeAgo: asTimeAgo(date),
    photo: data.photo || "",
    caption: data.caption || data.title,
    video: data.video || "",
    author: data.author || [null],
  };
}

function saveData(path, data) {
  fs.writeFile(path, data, (err) => {
    if (err) throw err;
  });
}

function asTimeAgo(date) {
  return `${formatDistanceToNow(new Date(date))} ago`;
}
