"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export function Project({ title, disc, img, link,fro,bac,fram,sty }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-black relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border-neutral-600 rounded-lg w-auto sm:w-[30rem] h-auto  p-2 border  ">
        <CardItem translateZ="100" className="w-full ">
          <img
            src={img}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-sm group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="font-bold text-2xl font-sans bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-violet-800 mt-5"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="font-light text-[17px]  text-white text-left md:text-left text-base"
        >
          {disc}
        </CardItem>
        <div className="flex items-center justify-start gap-1 my-2">
        <CardItem>
          <div className="text-white border-2 border-neutral-400 rounded-sm bg-neutral-900 px-2 py-1 text-xs font-normal mt-2">
            {fro}
          </div>
        </CardItem>
        <CardItem>
          <div className="text-white border-2 border-neutral-400 rounded-sm bg-neutral-900 px-2 py-1 text-xs font-normal mt-2">
            {sty}
          </div>
        </CardItem>
        <CardItem>
          <div className="text-white border-2 border-neutral-400 rounded-sm bg-neutral-900 px-2 py-1 text-xs font-normal mt-2">
            {bac}
          </div>
        </CardItem>
        <CardItem>
          <div className="text-white border-2 border-neutral-400 rounded-sm bg-neutral-900 px-2 py-1 text-xs font-normal mt-2">
           {fram}
          </div>
        </CardItem>
        </div>
        <div className="flex justify-between items-center ">
          <CardItem
            translateZ={20}
            as="a"
            href={link}
            target="__blank"
            className=" py-2 rounded-xl text-xs font-normal dark:text-white text-white"
          >
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-4 py-1   rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                <Image
                  src="/git.png"
                  height={20}
                  width={20}
                  alt="github"
                ></Image>
              </div>
            </button>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
