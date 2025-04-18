"use client";
import React from "react";
import { BackgroundGradient } from "../components/ui/background-gradient";
import Image from "next/image";
import Link from "next/link";

export function Stey() {
  return (
    <div className="xl:w-[82%] lg:w-[95%] md:w-[90%]  w-full  m-2 ">
      <h1 className="text-transparent text-center font-bold text-5xl pb-2 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text mb-10">
        Steyp :My Experience
      </h1>
      <BackgroundGradient className="rounded-[22px] w-full  p-4 sm:p-10 bg-black dark:bg-zinc-900">
        <h3 className="font-bold text-2xl text-center font-sans bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-violet-800 dark:text-white">
          STEYP: A journey that redefined my perspective, sharpened my skills,
          and left an indelible mark on my growth
        </h3>
        <div className="pt-5">
          <div className="text-white text-[20px] font-light">
            I started coding when I was a 8th grade student but I can't abled to
            do anything big because I doesn't have any guidance or mentoring or
            support to clear my doubts and to move forward.At that time, I came
            to know about Steyp through a news Report. I was interested with
            that and joined Steyp when I was in plus one.{" "}
            <span className="bg-neutral-700">
              With just One year I gained a lot from them. Providing guidance,
              mentorship, and moreover proper path helped me to become a full
              stack developer.
            </span>
            Now I have made 4 full stack projects.<br></br> <br></br>
            Made various frontend , backend projects. Through steyp I got a
            potential to research new technologies, gain knowledge of quickly
            changing today's technological world. Moreover,
            <span className="bg-gradient-to-r from-red-600 to-violet-800 text-xl rounded-sm">
              {" "}
              thanking steyp for providing a well-structured 365 days of course
              for developing a strong base in the field of software development
            </span>
            <br></br>
            <Link href="https://steyp.com/feed/ZIYAUDHEEN%20MS" target="_blank">
              <button className="p-[3px] relative my-4 w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                  Visit my steyp Profile
                </div>
              </button>
            </Link>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
}
