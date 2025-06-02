import ProjectCard from "../../components/ProjectCard";

const ProjectsPage = () => {
  const projects = [
    {
      href: "https://miimovies.com",
      src: "/img/brands/miimovies.svg",
      alt: "Mii Movies",
      description: "Watch movies and enjoy cinema experiences online.",
      date: "04/05/2025",
      services: "Website Design & Development",
      otherServices: "Branding, Social Media Integration",
    },
    {
      href: "https://capitalxfinance.com",
      src: "/img/brands/microsoft.svg",
      alt: "Capital X Finance",
      description: "Financial services to grow your business online.",
      date: "04/05/2025",
      services: "Website Design & Development",
      otherServices: "SEO, Business Profile Setup",
    },
    {
      href: "https://prashely.com",
      src: "/img/brands/prashely.svg",
      alt: "Prashely",
      description: "Creative solutions for personal and business websites.",
      date: "04/05/2025",
      services: "Website Design & Development",
      otherServices: "Branding, Content Writing",
    },
    {
      href: "https://dlaminisibusiso.com",
      src: "/img/brands/sbu.svg",
      alt: "Dlamini Sibusiso",
      description: "Personal portfolio showcasing development and design work.",
      date: "04/05/2025",
      services: "Portfolio Development",
      otherServices: "Graphic Design, SEO",
    },
    {
      href: "https://dlaminisibusiso.com",
      src: "/img/brands/maporch.svg",
      alt: "Maporch Enterprise",
      description: "Elevating online presence for businesses.",
      date: "04/05/2025",
      services: "Website Design & Development",
      otherServices: "Google Business Profile Setup, Graphic Design",
    },
    {
      href: "https://dlaminisibusiso.com",
      src: "/img/brands/v.svg",
      alt: "Vhugala Goodvill Ngwana",
      description: "Professional branding and online business presence.",
      date: "04/05/2025",
      services: "Website Design & Development",
      otherServices: "Branding, Social Media",
    },
  ];

  return (
    <div className="container mx-auto my-14 px-4">
      <h1 className="text-3xl font-bold text-center mb-10">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            projectName={project.alt}
            projectLogo={project.src}
            projectDescription={project.description}
            projectDate={project.date}
            projectServices={project.services}
            projectOtherServices={project.otherServices}
            projectLink={project.href}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
