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
