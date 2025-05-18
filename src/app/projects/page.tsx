import Image from "next/image";
import Link from "next/link";

const ProjectsPage = () => {
  const projects = [
    {
      href: "https://miimovies.com",
      src: "/img/brands/miimovies.svg",
      alt: "Mii Movies Logo",
    },
    {
      href: "https://capitalxfinance.com",
      src: "/img/brands/microsoft.svg",
      alt: "Capital X Finance Logo",
    },
    {
      href: "https://prashely.com",
      src: "/img/brands/prashely.svg",
      alt: "Prashely Logo",
    },
    {
      href: "https://dlaminisibusiso.com",
      src: "/img/brands/sbu.svg",
      alt: "Dlamini Sibusiso Logo",
    },
    {
      href: "https://dlaminisibusiso.com",
      src: "/img/brands/maporch.svg",
      alt: "Dlamini Sibusiso Logo",
    },
    {
      href: "https://dlaminisibusiso.com",
      src: "/img/brands/v.svg",
      alt: "Dlamini Sibusiso Logo",
    },
  ];

  return (
    <div className="container mx-auto my-14">
      <h1 className="text-3xl font-bold text-center mb-10">Our Projects</h1>
      <div className="flex flex-wrap justify-center gap-5 lg:mt-10 md:justify-around">
        {projects.map((project, index) => (
          <Link key={index} href={project.href} target="_blank">
            <span>
              <Image
                src={project.src}
                width="160"
                height="160"
                alt={project.alt}
                className="w-40"
              />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
