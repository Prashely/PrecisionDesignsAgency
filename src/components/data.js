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
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Unlimited revisions",
      desc: "Here you can add the next benefit point.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Same-day delivery",
      desc: "This will be your last bullet point in this section.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Website Maintenance",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Access to Creatives Director",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Fixed Monthly Rate",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
