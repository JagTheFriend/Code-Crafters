import Head from "next/head";
import Navbar from "~/components/Navbar";
import StickyScrollReveal from "~/components/StickyScrollReveal";
import { Spotlight } from "~/components/ui/Spotlight";
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
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset] transition duration-200 hover:bg-blue-700">
            Register
          </button>
          <button className="px-4 py-2  text-white">Login</button>
        </div>
      </Vortex>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer text-neutral-content bg-base-300 mt-10 flex items-center justify-center p-4">
      <aside className="grid-flow-col items-center">
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a
          href="https://github.com/jagthefriend"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 256 256"
            fill="none"
            version="1.1"
          >
            <g transform="translate(0, 0)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="256"
                height="256"
                viewBox="0 0 256 256"
                fill="none"
              >
                <rect width="256" height="256" rx="60" fill="#242938" />
                <path
                  d="M128.001 30C72.7791 30 28 74.7708 28 130.001C28 174.184 56.6533 211.668 96.3867 224.891C101.384 225.817 103.219 222.722 103.219 220.081C103.219 217.696 103.126 209.819 103.083 201.463C75.2631 207.512 69.3927 189.664 69.3927 189.664C64.8437 178.105 58.2894 175.032 58.2894 175.032C49.2163 168.825 58.9733 168.953 58.9733 168.953C69.0151 169.658 74.3026 179.258 74.3026 179.258C83.2217 194.546 97.6965 190.126 103.403 187.571C104.301 181.107 106.892 176.696 109.752 174.199C87.5405 171.67 64.1913 163.095 64.1913 124.778C64.1913 113.86 68.0977 104.939 74.4947 97.9362C73.4564 95.4175 70.0335 85.2465 75.4635 71.4722C75.4635 71.4722 83.8609 68.7845 102.971 81.7226C110.948 79.5069 119.502 78.3958 128.001 78.3577C136.499 78.3958 145.061 79.5069 153.052 81.7226C172.139 68.7845 180.525 71.4722 180.525 71.4722C185.968 85.2465 182.544 95.4175 181.505 97.9362C187.917 104.939 191.797 113.86 191.797 124.778C191.797 163.187 168.403 171.644 146.135 174.119C149.722 177.223 152.918 183.308 152.918 192.638C152.918 206.018 152.802 216.787 152.802 220.081C152.802 222.742 154.602 225.86 159.671 224.878C199.383 211.64 228 174.169 228 130.001C228 74.7708 183.227 30 128.001 30ZM65.4536 172.453C65.2333 172.95 64.4517 173.099 63.7396 172.758C63.0143 172.432 62.6069 171.754 62.8421 171.256C63.0574 170.744 63.8406 170.602 64.5643 170.945C65.2913 171.271 65.7053 171.955 65.4536 172.453ZM70.3725 176.842C69.8956 177.285 68.9633 177.079 68.3307 176.38C67.6766 175.683 67.554 174.751 68.0376 174.302C68.5294 173.86 69.4336 174.067 70.0893 174.764C70.7434 175.47 70.8709 176.395 70.3725 176.842ZM73.7471 182.458C73.1344 182.884 72.1325 182.485 71.5132 181.595C70.9004 180.706 70.9004 179.64 71.5264 179.212C72.1474 178.785 73.1344 179.169 73.762 180.052C74.373 180.956 74.373 182.023 73.7471 182.458ZM79.4542 188.962C78.9061 189.566 77.7386 189.404 76.8841 188.579C76.0098 187.773 75.7663 186.629 76.3161 186.024C76.8709 185.418 78.045 185.589 78.9061 186.407C79.7738 187.211 80.0387 188.364 79.4542 188.962ZM86.8301 191.157C86.5883 191.941 85.4639 192.297 84.3312 191.964C83.2002 191.621 82.46 190.704 82.6885 189.912C82.9237 189.124 84.053 188.753 85.194 189.109C86.3234 189.45 87.0652 190.361 86.8301 191.157ZM95.2242 192.089C95.2523 192.913 94.2919 193.597 93.1029 193.612C91.9073 193.639 90.9402 192.971 90.9269 192.16C90.9269 191.327 91.8659 190.65 93.0615 190.63C94.2505 190.607 95.2242 191.269 95.2242 192.089ZM103.47 191.773C103.613 192.577 102.787 193.404 101.606 193.624C100.445 193.836 99.3702 193.339 99.2229 192.541C99.0788 191.716 99.92 190.89 101.079 190.676C102.262 190.471 103.32 190.955 103.47 191.773Z"
                  fill="white"
                />
              </svg>
            </g>
          </svg>
        </a>
      </nav>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Code Crafters</title>
        <meta
          name="description"
          content="Simple website made using create-t3-app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="scroll-smooth">
        {/* Visualizing purposes */}
        <section className="sticky top-0 z-50 bg-green-500">
          <Navbar />
        </section>
        <section className="_bg-red-500">
          <SpotlightName />
        </section>
        <section className="_bg-blue-500">
          <StickyScrollReveal />
        </section>
        <section className="_bg-yellow-500">
          <VortexPitch />
        </section>
      </main>
      <Footer />
    </>
  );
}
