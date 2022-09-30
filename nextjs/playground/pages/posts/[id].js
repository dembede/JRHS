/** Example from https://nextjs.org/docs/basic-features/pages */

import styles from "../../styles/Home.module.css";
import Link from "next/link";

async function getAllPostIds() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));
  return paths;
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const paths = await getAllPostIds();

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains post id
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
}

export default function Post({ post }) {
  return (
    <div className={styles.container}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <hr />
      <Link href="/blog"> « back to blog</Link> |
      <Link href="/"> « back home</Link>
    </div>
  );
}
