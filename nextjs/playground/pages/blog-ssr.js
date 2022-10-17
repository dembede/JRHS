import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import CustomHead from "../components/customHead";
import Link from "next/link";
import Image from "next/image";
import {
  fetchNewsArticles,
  fetchLocalNewsArticle,
  fetchLocalNewsArticles,
} from "../lib/posts";
import LOCAL_NEWS_ARTICLES from "../server/news.json";
import LOCAL_NEWS_TEASERS from "../server/news-teasers.json";

// This gets called on every request
/* export async function getServerSideProps() {
    await fetchPosts();
      const posts = await fetchNewsArticles();
      return {
        props: {
          posts,
        },
      };
    }
**/

// export async function getStaticPaths() {
//   // Return a list of possible values for id (or URL slugs?)
// }

export async function getStaticProps() {
  const data = await fetchNewsArticles(); // not pulling data
  // console.log("data", data);
  const posts = await fetchLocalNewsArticles();
  return {
    props: {
      posts,
    },
  };
}

export default function BlogSSR({ posts }) {
  // useEffect(() => {
  // fetchNewsArticles().then((data) => console.log(data));
  // }, []);
  return (
    <div className={styles.container}>
      <CustomHead
        title="Nation.Africa Latest News"
        description="Nation.Africa Latest News"
      />
      <main className={styles.main}>
        <h1 className={styles.title}>Local News</h1>
        <p>
          <small>SSR - Server Side Rendered Posts</small>
        </p>
        <div className={styles.grid}>
          {posts &&
            posts.map((post, index) => (
              <div className={styles.card} key={`${index}-${post.id}`}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "120px",
                    background: "#f7f7f7",
                    marginBottom: "10px",
                  }}
                >
                  {post.photo && (
                    <Image
                      src={post.photo} // Route of the image file
                      // height={200} // Desired size with correct aspect ratio
                      // width={300} // Desired size with correct aspect ratio
                      alt={post.caption}
                      title={post.caption}
                      layout="fill"
                      // blurDataURL={post.photo}
                      // placeholder="blur" // Optional blur-up while loading
                    />
                  )}
                </div>
                {/* <Link href={`/posts/${post.slug}`}> */}
                <Link href={`/posts/${post.id}`}>
                  <h3>{post.title}</h3>
                </Link>
                <small>{post.timeAgo}</small>
                <small>
                  {" "}
                  {/* // BY: {post.author[0] && post.author[0].fullname} */}
                </small>
                <p>{post.excerpt}</p>
              </div>
            ))}
        </div>
        <hr />
        <Link href="/"> « Back Home</Link>
      </main>
    </div>
  );
}
