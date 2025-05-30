"use client";
import React from "react";
import { Container } from "@/components/Container";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-primary bg-accent/70 rounded-lg  hover:bg-accent/85 focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75 dark:bg-white dark:text-black">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-primary`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-black dark:text-black">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "Do you work with clients outside South Africa?",
    answer:
      "Absolutely, we proudly work with clients across the globe. Our fully remote process ensures smooth communication, quick turnarounds, and high-end design — no matter where you're located.",
  },
  {
    question: "Do you offer revisions?",
    answer:
      "Of course, we offer a maximum of 3 revisions per project, However our golden clietnts get to enjoy unlimited revisions.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Our turnaround time ranges from 2 to 14 days, depending on the scope of the project. If you need faster delivery, we offer same-day or next-day service for an additional 15% rush fee.",
  },
  {
    question: "Do you offer refunds? ",
    answer:
      "We do not offer refunds once a project has started, as time and creative work are immediately invested.",
  },
];
