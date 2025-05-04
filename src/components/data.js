import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "The Golden Package",
  desc: "Elevate your brand by joining Precision’s Golden Family — and experience limitless, high-end design through our exclusive Golden Package ",
  image: benefitOneImg,
  bullets: [
    {
      title: "Unlimited designs",
      desc: "Request as many design projects as needed — no limits.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Unlimited revisions",
      desc: "Revise until it aligns seamlessly with your vision.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Priotised Turnaround",
      desc: "Golden projects are always front of the line.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Access to Creatives Director",
      desc: "Direct collaboration with our Creative Director.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Fixed Rate",
      desc: "Premium designs with no unexpected costs.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Support",
      desc: "On call support for all your business needs.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
