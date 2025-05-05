import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { DesignShowcase } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="renowned services"
        title=" Smart. Strategic. Beautifully Crafted."
      >
        Blending strategy and modern minimalism to deliver work that is both
        functional and refined. We do not just design — we craft purposeful
        visuals that leave a lasting impact & grow businesses.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <DesignShowcase />

      <SectionTitle preTitle="Testimonials" title="Here's what our clients say">
        If elegance and simplicity are were not the goal of this website we
        would have added more testimonials.{" "}
        <span className="text-accent font-helvetica font-light">
          But we are not here to brag.
        </span>
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        A few common questions we get asked about our services. If you have any
        other questions, feel free to reach out to us
        <a
          href="https://wa.me/27645011986"
          className="ml-1 text-accent underline underline-offset-2 hover:text-accent/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          here
        </a>
        .
      </SectionTitle>

      <Faq />
    </Container>
  );
}
