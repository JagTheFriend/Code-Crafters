import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import StickyScrollReveal from "~/components/StickyScrollReveal";
import { Spotlight } from "~/components/ui/Spotlight";
import { Meteors } from "~/components/ui/meteors";
import { Vortex } from "~/components/ui/vortex";

function SpotlightName() {
  return (
    <div className="bg-grid-white/[0.02] relative flex w-full overflow-hidden rounded-md antialiased md:h-[10rem] md:items-center md:justify-center lg:h-[40rem]">
      <Spotlight
        className="-top-14 left-5 md:-top-20 md:left-60 lg:-top-48 lg:left-80"
        fill="white"
      />
      <div className="relative z-10 mx-auto  w-full max-w-7xl p-4  pt-20 hover:cursor-pointer md:pt-0">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          <span className="transition-all hover:border-b-2">Code Crafters</span>
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
          Inspiring Minds, One Post at a Time
        </p>
      </div>
    </div>
  );
}

function VortexPitch() {
  return (
    <div className="mx-auto h-[30rem] w-[calc(100%-4rem)] overflow-hidden rounded-md">
      <Vortex
        backgroundColor=""
        className="flex h-full w-full flex-col items-center justify-center px-2 py-4 md:px-10"
      >
        <h2 className="text-center text-2xl font-bold text-white md:text-6xl">
          Code Crafters
        </h2>
        <p className="mt-6 max-w-xl text-center text-sm text-white md:text-2xl">
          Learn to master crafting digital masterpieces <br />
          one line at a time for free.
        </p>
        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row">
          <button
            type="button"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset] transition duration-200 hover:bg-blue-700"
          >
            Register
          </button>
          <button type="button" className="px-4 py-2  text-white">
            Login
          </button>
        </div>
      </Vortex>
    </div>
  );
}

function MeteorCard() {
  return (
    <div className="flex justify-center">
      <div className=" relative w-[calc(100%-4rem)]">
        <div className="relative flex h-full flex-col items-start  justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
          <h1 className="relative z-50 mb-4 text-2xl font-bold text-white">
            Code Crafters
          </h1>

          <p className="relative z-50 mb-4 text-base font-normal text-slate-500">
            Learn to master crafting digital masterpieces <br />
            one line at a time for free.
          </p>

          <div className="mt-6 flex flex-row items-center gap-4 sm:flex-row">
            <button
              type="button"
              className="rounded-lg bg-blue-600 px-4 py-2 text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset] transition duration-200 hover:bg-blue-700"
            >
              Register
            </button>
            <button type="button" className="px-4 py-2  text-white">
              Login
            </button>
          </div>
          <Meteors number={30} />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // const isMobile = window.matchMedia("(max-width: 600px)").matches;
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      );
    setIsMobile(isMobile);
  }, []);

  return (
    <>
      <Head>
        <title>Code Crafters</title>
        <meta
          name="description"
          content="Simple website made using create-t3-app"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className="scroll-smooth">
        {/* Visualizing purposes */}
        <section className="sticky top-0 z-50">
          <Navbar pageName="home" />
        </section>
        <section>
          <SpotlightName />
        </section>
        <section>
          <StickyScrollReveal />
        </section>
        <section>
          {/* Don't display resource intensive animation if visiting website with mobile */}
          {!isMobile && <VortexPitch />}
          {isMobile && <MeteorCard />}
        </section>
      </main>
      <Footer />
    </>
  );
}
