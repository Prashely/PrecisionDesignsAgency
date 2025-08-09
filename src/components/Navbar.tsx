"use client";
import Link from "next/link";
import Image from "next/image";
// import ThemeChanger from "./DarkSwitch"; // Commented out the import

export const Navbar = () => {
  const navigation = ["Product", "Features", "Pricing", "Company", "Blog"];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo */}
        <Link href="/">
          <span>
            <Image
              src="/img/logo.svg"
              width="32"
              alt="Precision Designs Logo"
              height="32"
              className="w-60"
            />
          </span>
        </Link>

        {/* get started */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          {/* <ThemeChanger /> */}
          <div className="hidden mr-3 lg:flex nav__item">
            <Link
              href="https://wa.me/27683928066"
              className="px-8 py-3 text-white font-medium bg-primary rounded-md md:ml-5"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
