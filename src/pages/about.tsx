import Head from "next/head";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import { BackgroundBeams } from "~/components/ui/background-beams";

function AboutContent() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center rounded-md bg-neutral-950 antialiased">
      <div className="mx-auto max-w-2xl p-4">
        <h1 className="relative z-10 bg-gradient-to-b from-neutral-200  to-neutral-600 bg-clip-text text-center font-sans text-lg  font-bold text-transparent md:text-7xl">
          Code Crafters
        </h1>
        <p className="relative z-10 mx-auto my-2 max-w-lg text-center text-sm text-neutral-500">
          At Code Crafters, we strive to be your go-to source for informative
          and engaging content on a wide range of topics in the tech industry.
          Whether you're a beginner looking to learn the basics of coding or an
          experienced developer seeking advanced tips and tricks, we've got you
          covered. From programming languages like Python, JavaScript, and Java
          to web development, software engineering, and everything in between,
          our blog covers it all.
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Code Crafters</title>
        <meta name="description" content="About Code Crafters" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="scroll-smooth">
        <section className="sticky top-0 z-50">
          <Navbar pageName="about" />
        </section>
        <section>
          <AboutContent />
        </section>
      </main>
      <Footer />
    </>
  );
}
