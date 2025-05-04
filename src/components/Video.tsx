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
    <Container>
      <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
        {designs.map((design, index) => (
          <span key={index}>
            <Image
              src={design.src}
              width={160}
              height={160}
              alt={design.alt}
              className="w-40"
            />
          </span>
        ))}
      </div>
    </Container>
  );
}
