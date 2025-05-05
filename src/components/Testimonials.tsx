import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import userOneImg from "../../public/img/user1.png";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.png";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3 mb-10">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-primary px-14 rounded-2xl py-14 text-white">
            <p className="text-2xl leading-normal text-white">
              ...they always get work done and they seems to always know of a
              more
              <Mark>affordable solution</Mark>...
            </p>

            <Avatar
              image={userOneImg}
              name="Sibusiso Dlamini"
              title="Cryptocurrency Mogul"
            />
          </div>
        </div>
        <div className="text-white">
          <div className="flex flex-col justify-between w-full h-full px-14 rounded-2xl py-14 bg-primary">
            <p className="text-2xl leading-normal text-white">
              By far my favourite <Mark>design agency</Mark>
              exceptional and super quick. Great partnership...
            </p>

            <Avatar
              image={userTwoImg}
              name="Jonas Senoamadi"
              title="Founder at EcoSuitors"
            />
          </div>
        </div>
        <div className="text-white">
          <div className="flex flex-col justify-between w-full h-full px-14 rounded-2xl py-14 bg-primary">
            <p className="text-2xl leading-normal text-white">
              ..it was nice to work with Precision, They are good in
              <Mark>communication and fair</Mark> in their pricing...
            </p>

            <Avatar
              image={userThreeImg}
              name="Koketso"
              title="Co-founder of Shoe Store"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-white dark:text-white">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-primary bg-accent rounded-md dark:ring-primary dark:bg-accent dark:text-primary">
        {props.children}
      </mark>{" "}
    </>
  );
}
