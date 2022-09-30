import styles from "../styles/Home.module.css";
import CustomHead from "../components/customHead";
import Link from "next/link";

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}

export default function Blog({ posts }) {
  return (
    <div className={styles.container}>
      <CustomHead title="Blog Posts" description="Blog Posts" />
      <main className={styles.main}>
        <h1 className={styles.title}>Blog Posts</h1>
        <div className={styles.grid}>
          {posts.map((post, index) => (
            <div className={styles.card} key={`${index}-${post.id}`}>
              <Link href={`/posts/${post.id}`}>
                <h2>{post.title}</h2>
              </Link>
              <p>{`${post.body.slice(0, 50)}...`}</p>
            </div>
          ))}
        </div>
        <hr />
        <Link href="/"> « back home</Link>
      </main>
    </div>
  );
}
