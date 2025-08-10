import React from "react";
import PortfolioItem from "../../components/PortfolioItem";

const ProjectsPage: React.FC = () => {
  return (
    <main>
      <h1 className="text-center text-2xl">
        <span className="text-accent block">awesomely crafted</span> Portfolio
      </h1>
      <div className="w-[88vw] md:w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-8 mx-auto">
        <div className="p-2 bg-white rounded">
          <PortfolioItem
            image="/brands/1.png"
            label="MiiMovies"
            href="https://miimovies.com/"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
        <div className="p-2 bg-white rounded">
          <PortfolioItem
            image="/brands/prashely.svg"
            label="Prashely"
            href="https://www.prashely.co.za/"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
        <div className="p-2 bg-white rounded">
          <PortfolioItem
            image="/brands/3.jpg"
            label="Dlamini Sibusiso"
            href="https://dlaminisibusiso.com/"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
        <div className="p-2 bg-white rounded">
          <PortfolioItem
            image="/brands/nashlogo.png"
            label="Nash - Fitness"
            href="https://nash-fitness.com/"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
        <div className="p-2 bg-white rounded">
          <PortfolioItem
            image="/brands/dlogo.png"
            label="DMSS"
            href="https://www.dennismatlhabasecondary.co.za/"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
        <div className="p-2 bg-white rounded">
          <PortfolioItem
            image="/brands/vlogo.png"
            label="Vhugala Ngwana"
            href="https://vhugalagoodwillngwana.co.za/"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
        <div className="p-2 bg-white rounded">
          <PortfolioItem
            image="/brands/6.png"
            label="Vustar's Kitchen"
            href="https://sites.google.com/view/vustars-kitchen/home"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
        <div className="p-2 bg-white rounded">
          <PortfolioItem
            image="/brands/7.png"
            label="Securilec"
            href="https://sites.google.com/view/securilec/home"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
        <div className="p-2 bg-white rounded">
          <PortfolioItem
            image="/brands/lbslogo.png"
            label="Lutendo B Supplies"
            href="https://lutendobusinesssupplies.com/"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
        <div className="p-2 bg-white rounded">
          <PortfolioItem
            image="/brands/x.png"
            label="Capital X Finance"
            href="https://capitalxfinance.com/"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
        <div className="p-2 bg-white rounded">
          <PortfolioItem
            image="/brands/rra.png"
            label="BoRratsela"
            href="https://borratsela.co.za/"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
