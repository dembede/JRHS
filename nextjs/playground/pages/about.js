import styles from "../styles/Home.module.css";
import CustomHead from "../components/customHead";
import typeface from "../styles/Typeface.module.css";
import postStyles from "../styles/Post.module.css";
import Link from "next/link";

export default function About() {
  return (
    <div className={postStyles.container}>
      <CustomHead title="About us" description="Read more about us" />
      <main className={postStyles.main}>
        <h1 className={typeface.title}>About</h1>
        <i>What this NextJS project is about</i>
        <h2>Static Rendering</h2>
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
        <h2>Server Side Rendering (SSR)</h2>
        <p>
          Also called <strong>dynamic rendering</strong>. If a page uses
          Server-side Rendering, the page HTML is generated{" "}
          <strong>on each request</strong>.
        </p>
        <p>
          <code>getServerSideProps</code> only runs on server-side and never
          runs on the browser.
        </p>
        <hr />
        <Link href="/"> « back home</Link>
      </main>
    </div>
  );
}
