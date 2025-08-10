import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.svg";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-primary lg:text-4xl lg:leading-none xl:text-6xl xl:leading-tight">
              Specializing in clean, modern web and graphic design.
            </h1>
            <p className="py-5 text-xl leading-normal text-primary lg:text-xl xl:text-2xl">
              We create premium websites and visual content that reflect
              excellence. Our design approach is grounded in precision, modern
              minimalism, and intentional detail.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://wa.me/27683928066"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-bold text-center text-primary bg-accent rounded-md "
              >
                Start You Project
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="lg:pb-40">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-primary mt-5 lg:mt-0">
            Trusted by <span className="text-primary">25+</span> Clients
            Nationwide
          </div>

          <div className="flex flex-wrap justify-center gap-5 my-14 lg:mt-10 md:justify-around">
            <Link href="https://miimovies.com">
              <span>
                <Image
                  src="/img/brands/miimovies.svg"
                  width="32"
                  alt="Precision Designs Logo"
                  height="32"
                  className="w-40"
                />
              </span>
            </Link>
            <Link href="https://capitalxfinance.com">
              <span>
                <Image
                  src="/img/brands/microsoft.svg"
                  width="32"
                  alt="Precision Designs Logo"
                  height="32"
                  className="w-40"
                />
              </span>
            </Link>
            <Link href="https://prashely.com">
              <span>
                <Image
                  src="/img/brands/prashely.svg"
                  width="32"
                  alt="Precision Designs Logo"
                  height="32"
                  className="w-40"
                />
              </span>
            </Link>
            <Link href="https://dlaminisibusiso.com">
              <span>
                <Image
                  src="/img/brands/sbu.svg"
                  width="32"
                  alt="Precision Designs Logo"
                  height="32"
                  className="w-40"
                />
              </span>
            </Link>
          </div>

          <div className="flex items-center justify-center text-accent tex-center underline underline-offset-4">
            <Link href="/website">More</Link>
          </div>
        </div>
      </Container>
    </>
  );
};
