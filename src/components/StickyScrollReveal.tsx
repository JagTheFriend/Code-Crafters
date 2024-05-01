import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Coder Crafters",
    description:
      "Your go-to destination for insightful coding tutorials, tips, and tricks to elevate your programming skills.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Coder Crafters
      </div>
    ),
  },
  {
    title: "Tiny Code Tips",
    description:
      "Embark on a journey of coding enlightenment. Dive into a sanctuary of knowledge where every line of code is a brushstroke of brilliance",

    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--red-500))] text-white">
        Tiny Code Tips
      </div>
    ),
  },
];

export default function StickyScrollReveal() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
