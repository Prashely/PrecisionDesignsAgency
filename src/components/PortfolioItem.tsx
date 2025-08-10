import React from "react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

interface PortfolioItemProps {
  image: string;
  label: string;
  href: string;
  target: string;
  rel: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  image,
  label,
  href,
}) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-md">
      {/* Image Section */}
      <div className="relative w-64 h-64">
        <Image
          src={image}
          alt={`${label} project preview`}
          fill
          className="object-contain bg-white"
        />
      </div>

      {/* Label + Link */}
      <div className="flex items-center mb-4 mt-2 bg-white">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-[1px] md:text-lg font-semibold text-black transition-all duration-300 underline underline-offset-4 hover:text-primary hover:underline-offset-8 group"
        >
          <span className="group-hover:underline-offset-8 group-hover:text-primary">
            {label}
          </span>
          <FiArrowUpRight />
        </a>
      </div>
    </div>
  );
};

export default PortfolioItem;
