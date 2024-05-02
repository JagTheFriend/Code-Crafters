import Head from "next/head";
import Navbar from "~/components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Code Crafters</title>
        <meta name="description" content="About Code Crafters" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="scroll-smooth">
        <section className="_bg-green-500 sticky top-0 z-50">
          <Navbar pageName="about" />
        </section>
      </main>
    </>
  );
}
