import Head from "next/head";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact author of Code Crafters" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="scroll-smooth">
        <section className="sticky top-0 z-50">
          <Navbar pageName="contact" />
        </section>
      </main>
      <Footer />
    </>
  );
}
