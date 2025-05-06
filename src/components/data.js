import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.svg";
import benefitTwoImg from "../../public/img/benefit-two.svg";

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
  title: "more more benefits",
  desc: "Not only do you get limitless designs with fast turnarounds — you also get fixed rates that make it easy to budget your business properly, without any unexpected design costs.",
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

export { benefitOne, benefitTwo };
