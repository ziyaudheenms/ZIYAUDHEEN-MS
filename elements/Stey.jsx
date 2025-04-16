"use client";
import React from "react";
import { BackgroundGradient } from "../components/ui/background-gradient";
import Image from "next/image";

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
            With the 365 days of training from the Edutech platform Steyp ,I got
            the potential to build fully functional full stack applications.I
            started coding when I was a 8th grade student but I can't abled to
            do anything big because I doesn't have any guidance or mentoring or
            support to clear my doubts and to move forward. What I done was
            started with the basic printing of "hello world", arithmetic
            operations like adding two numbers, implementing simple if-else
            statements and printing 1 to 100 using for loops in languages like
            python, C++, JavaScript etc. I don't have any idea about what to do
            next using these languages. When I stuck with errors or problems, I
            would just stop learning that language and switch to next one. That
            was my style of learning for three years and I doesn't had any big
            progression. At that time, I came to know about Steyp through a news
            Report. I was interested with that and joined Steyp when I was in
            plus one.{" "}
            <span className="bg-neutral-700">
              With just One year I gained a lot from them. Providing guidance,
              mentorship, and moreover proper path helped me to become a full
              stack developer.
            </span>
            Now I have made 4 full stack projects.<br></br>{" "}
            <ul className="list-disc pl-5 py-3 text-white">
              <li className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-violet-800">
                Bloweb - blogging platform
              </li>
              <li className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-violet-800">
                pw-manager - password manager
              </li>
              <li className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-violet-800">
                BloggerAI - chat bot platform
              </li>
              <li className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-violet-800">
                Hourent - house renting platform
              </li>
            </ul>
            Made various frontend , backend projects. Through steyp I got a
            potential to research new technologies, gain knowledge of quickly
            changing today's technological world. Moreover,
            <span className="bg-gradient-to-r from-red-600 to-violet-800 text-xl rounded-sm">
              {" "}
              thanking steyp for providing a well-structured 365 days of course
              for developing a strong base in the field of software development
            </span>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
}
