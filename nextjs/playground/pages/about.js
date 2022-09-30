import styles from "../styles/Home.module.css";
import CustomHead from "../components/customHead";
import typeface from "../styles/Typeface.module.css";
import Link from "next/link";

export default function About() {
  return (
    <div className={styles.container}>
      <CustomHead title="About us" description="Read more about us" />
      <main className={styles.main}>
        <h1 className={typeface.title}>Yay!</h1>
        <h3 className={typeface.miniTitle}>Welcome to the About us page!</h3>
        <p>Let's get the party started...</p>
        <p>
          By default, Next.js pre-renders every page. This means that Next.js
          generates HTML for each page in advance, instead of having it all done
          by client-side JavaScript. Pre-rendering can result in better
          performance and SEO.
        </p>
        <p>
          Next.js has two forms of pre-rendering: <b>Static Generation</b> and{" "}
          <b>Server-side Rendering</b>. The difference is in{" "}
          <strong>when</strong> it generates the HTML for a page
        </p>
        <hr />
        <Link href="/"> « back home</Link>
      </main>
    </div>
  );
}
