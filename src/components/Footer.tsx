import Link from "next/link";

import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

export function Footer() {
  const navigation = ["Product", "Features", "Pricing", "Company", "Blog"];
  const legal = ["Terms", "Privacy", "Legal"];
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <Link
                href="/"      
              >
                <Image
                  src="/img/logo.svg"
                  alt="N"
                  width="32"
                  height="20"
                  className="w-60"
                />
              </Link>
            </div>

            <div className="max-w-md text-primary dark:text-gray-400">
            We create premium websites and visual content that reflect excellence. Our design approach is grounded in precision, modern minimalism, and intentional detail.
            </div>
          </div>
          <div className="">
            <div className="font-bold">Get in touch</div>
            <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
      <a href="tel:0645011986" className="hover:text-primary transition block">
      064 501 1986
      </a>
      <a
        href="https://wa.me/27645011986"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary transition block"
      >
      064 501 1986
      </a>
      <a
        href="mailto:info@precisiondesignsagency.com"
        className="hover:text-primary transition block"
      >
      info@precisiondesignsagency.com
      </a>
    </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-primary dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. All Rights Reseverd
        </div>
      </Container>
    </div>
  );
}

