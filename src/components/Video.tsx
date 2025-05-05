import Image from "next/image";
import One from "../../public/designs/1.png";
import Two from "../../public/designs/2.png";
import Three from "../../public/designs/3.png";
import { Container } from "@/components/Container";

export function DesignShowcase() {
  const designs = [
    { src: One, alt: "Design 1" },
    { src: Two, alt: "Design 2" },
    { src: Three, alt: "Design 3" },
  ];

  return (
    <div className="my-20 ">
      <a
        href="https://wa.me/27645011986"
        target="_blank"
        rel="noopener"
        className="flex max-w-xl items-center justify-center px-8 py-4 text-lg font-bold mx-auto text-center text-primary bg-accent rounded-md my-10 hover:bg-accent/80 transition duration-300 ease-in-out"
      >
        Learn More
      </a>
      <h3 className="text-2xl font-bold text-center text-accent">
        recent projects
      </h3>
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-5 mt-10 md:grid-cols-3">
        {designs.map((design, index) => (
          <div key={index} className="relative group max-w-6xl">
            {/* Design Image */}
            <Image
              src={design.src}
              width={260}
              height={260}
              alt={design.alt}
              className="w-full h-auto rounded-xl object-cover group-hover:zoom-in transition-transform duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
