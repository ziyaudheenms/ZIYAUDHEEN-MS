"use client";
import React from "react";
import { BackgroundGradient } from "../components/ui/background-gradient";
import Image from "next/image";
import Link from "next/link";

export function Card({ title, disc, img, link, fro, bac, fram, sty }) {
  return (
    <div className="xl:w-[39%] lg:w-[49%] md:w-[62%]">
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-5   bg-black dark:bg-zinc-900">
        <img
          src={img}
          alt="jordans"
          height="200"
          width="400"
          className="rounded-xl lg:h-[230px] h-[160px] md:h-[250px] xl:h-[260px] w-full mb-5"
        />
        <h3 className="font-bold  text-2xl font-sans bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-violet-800 dark:text-white">
          {title}
        </h3>

        <p className="font-light text-[17px]  text-[#888888] text-left md:text-left text-base">
          {disc}
        </p>
        <div className="flex items-center justify-between gap-1 my-2">
        <div className="flex justify-between items-center gap-2 w-full">
          <div className="flex gap-1">
          <div className="text-white border-2 border-neutral-400 rounded-sm bg-neutral-900 px-2 py-1 text-xs font-normal mt-2">
            {fro}
          </div>
          <div className="text-white border-2 border-neutral-400 rounded-sm bg-neutral-900 px-2 py-1 text-xs font-normal mt-2">
            {bac}
          </div>
          <div className="text-white border-2 border-neutral-400 rounded-sm bg-neutral-900 px-2 py-1 text-xs font-normal mt-2">
            {fram}
          </div>
          <div className="text-white border-2 border-neutral-400 rounded-sm bg-neutral-900 px-2 py-1 text-xs font-normal mt-2">
            {sty}
          </div>
          </div>
          <Link href={link} target="_blank" rel="noopener noreferrer">
          <div className="text-white rounded-sm bg-gradient-to-r from-red-600 to-violet-800 px-4 py-1 text-xs font-normal mt-[10px] ">
            <Image src="/git.png" alt="LinkedIn" height={20} width={20} className=""/>
          </div>
          </Link>
        </div>
        </div>
      </BackgroundGradient>
    </div>
  );
}
