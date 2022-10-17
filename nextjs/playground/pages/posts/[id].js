/** Example from https://nextjs.org/docs/basic-features/pages */
import React, { useEffect } from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

import {
  // fetchPost,
  // fetchPosts,
  getAllLocalArticleIds,
  fetchLocalNewsArticle,
} from "../../lib/posts";

// export async function getStaticPaths() {
//   // Call an external API endpoint to get posts
//   const paths = await getAllPostIds();

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false };
// }

// // This also gets called at build time
// export async function getStaticProps({ params }) {
//   const post = await fetchPost(params.id);
//   return {
//     props: {
//       post,
//     },
//   };
// }

export async function getStaticPaths() {
  const paths = await getAllLocalArticleIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const article = await fetchLocalNewsArticle(params.id);
  return {
    props: {
      article,
    },
  };
}

export default function Post({ article }) {
  useEffect(() => {
    const story = document.querySelector("[data=story]");
    story.innerHTML = article.body;
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Image src={article.photo} width="990px" height="680px" />
        <h1>{article.title}</h1>
        <div data="story"></div>
      </div>
      <hr />
      <Link href="/blog-ssr"> « back to blog</Link> |
      <Link href="/"> « back home</Link>
    </div>
  );
}
