import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import { LampContainer } from "~/components/ui/lamp";

function ContactLamp() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text py-4 text-center text-xl font-medium tracking-tight text-transparent lg:text-4xl"
      >
        Feel free to contact developer:{" "}
        <Link href="mailto:JagTheFriend12@gmail.com">
          JagTheFriend12@gmail.com
        </Link>
      </motion.h1>
    </LampContainer>
  );
}

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
        <section>
          <ContactLamp />
        </section>
      </main>
      <Footer />
    </>
  );
}
