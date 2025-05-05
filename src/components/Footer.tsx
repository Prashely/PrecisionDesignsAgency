import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <div className="relative bg-white">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          {/* Left Section: Logo and Description */}
          <div className="lg:col-span-3 pr-8">
            <Link href="/">
              <Image
                src="/img/logo.svg"
                alt="Precision Designs Logo"
                width={200}
                height={40}
                className="w-60"
              />
            </Link>
            <p className="mt-4 max-w-md text-primary dark:text-black">
              We create premium websites and visual content that reflect
              excellence. Our design approach is grounded in precision, modern
              minimalism, and intentional detail.
            </p>
          </div>

          {/* Right Section: Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="font-bold mb-4 text-xl text-primary">
              Get in touch
            </h3>
            <div className="flex flex-col gap-3 text-lg font-medium text-primary dark:text-black">
              {/* Phone */}
              <Link href="tel:0645011986" className="flex items-center gap-3">
                <Image
                  src="/img/icons/call.svg"
                  width={24}
                  height={24}
                  alt="Call Icon"
                  className="w-6 h-6"
                />
                <span className="hover:text-accent ease-in-out duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accen">
                  064 501 1986
                </span>
              </Link>

              {/* WhatsApp */}
              <Link
                href="https://wa.me/27645011986"
                target="_blank"
                className="flex items-center gap-3"
              >
                <Image
                  src="/img/icons/whatsapp.svg"
                  width={24}
                  height={24}
                  alt="WhatsApp Icon"
                  className="w-6 h-6"
                />
                <span className="hover:text-accent ease-in-out duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accen">
                  064 501 1986
                </span>
              </Link>

              {/* Email */}
              <Link
                href="mailto:info@precisiondesignsagency.com"
                target="_blank"
                className="flex items-center gap-3 break-all"
              >
                <Image
                  src="/img/icons/mail.svg"
                  width={24}
                  height={24}
                  alt="Email Icon"
                  className="w-6 h-6 shrink-0"
                />
                <span className="hover:text-accent ease-in-out duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                  info@precisiondesignsagency.com
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="my-10 text-sm text-center text-primary dark:text-black">
          © {new Date().getFullYear()}. All Rights Reserved
          <Link
            href="/terms-and-conditions"
            className="mx-1 text-accent hover:text-primary ease-in-out duration-200 underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            T&Cs
          </Link>
        </div>
      </Container>
    </div>
  );
}
