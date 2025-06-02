"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ProjectCard({
  projectName,
  projectLogo,
  projectDescription,
  projectDate,
  projectServices,
  projectOtherServices,
  projectLink,
}) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div
      className="relative w-full h-64 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl overflow-hidden shadow-lg cursor-pointer transition-transform transform hover:scale-105"
      onClick={() => setShowInfo(!showInfo)}
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      {/* Logo Layer */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
          showInfo ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image
          src={projectLogo}
          alt={`${projectName} Logo`}
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Text Information Layer */}
      <div
        className={`absolute inset-0 flex flex-col justify-center items-center px-4 text-center text-white transition-opacity duration-500 ${
          showInfo ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-xl font-bold mb-2">{projectName}</h2>
        <p className="text-sm mb-1">{projectDescription}</p>
        <p className="text-xs mb-1">Date: {projectDate}</p>
        <p className="text-xs mb-1">Main Services: {projectServices}</p>
        <p className="text-xs mb-4">Other: {projectOtherServices}</p>
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 hover:bg-blue-800 text-white py-1 px-3 rounded-full text-xs font-semibold transition-colors duration-300"
        >
          LET’S SEE THE WEBSITE
        </a>
      </div>
    </div>
  );
}
