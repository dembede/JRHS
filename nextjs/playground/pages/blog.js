import styles from "../styles/Home.module.css";
import CustomHead from "../components/customHead";
import Link from "next/link";
import { fetchPosts } from "../lib/posts";

export async function getStaticProps() {
  const posts = await fetchPosts();
  return {
    props: {
      posts,
    },
  };
}

export default function Blog({ posts }) {
  return (
    <div className={styles.container}>
      <CustomHead title="Static Blog Posts" description="Static Blog Posts" />
      <main className={styles.main}>
        <h1 className={styles.title}>Static Blog Posts</h1>
        <p>
          <small>Statically Rendered</small>
        </p>
        <div className={styles.grid}>
          {posts.map((post, index) => (
            <div className={styles.card} key={`${index}-${post.id}`}>
              <Link href={`/posts/${post.id}`}>
                <h2>{post.title}</h2>
              </Link>
              {post.tags.map((tag, index) => (
                <small key={index}>
                  {tag}
                  {index + 1 < post.tags.length && " / "}
                </small>
              ))}
              <p>{`${post.body.slice(0, 50)}...`}</p>
              <div>
                {[...Array(post.reactions)].map(() => `🔥`)}
                <small>{post.reactions > 4 && ` x${post.reactions}`}</small>
              </div>
            </div>
          ))}
        </div>
        <hr />
        <Link href="/"> « back home</Link>
      </main>
    </div>
  );
}
