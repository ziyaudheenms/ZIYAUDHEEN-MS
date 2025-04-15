"use client";;
import React from "react";
import { BackgroundGradient } from "../components/ui/background-gradient"
import Image from "next/image";

export function Card() {
  return (
    <div className="md:w-[73%] mx-auto ">
      <BackgroundGradient className="rounded-[22px]  p-4 sm:p-10 bg-black dark:bg-zinc-900">
      <h3 className="font-bold text-2xl text-center font-sans bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-violet-800 dark:text-white">
                Credits That I Have From Steyp
        </h3>
        <div className="pt-5">
            <div className="py-3">
                <div className="flex justify-between items-center pb-3">   
                <h1 className="text-[18px] font-light text-neutral-300 ">UI ENGINEERING</h1>
                <h1 className="text-neutral-300 py-[2px] px-[6px] bg-gradient-to-r from-red-600 to-violet-800 rounded-sm ">9/10</h1>
                </div>
                <div className="h-[10px] w-full bg-gradient-to-r from-neutral-600 to-neutral-400 rounded-2xl">
                    <div className="h-full w-[90%] bg-gradient-to-r from-red-600 to-violet-800 rounded-2xl"></div>
                </div>
            </div>
            <div className="py-3">
                <div className="flex justify-between items-center pb-3">   
                <h1 className="text-[18px] font-light text-neutral-300 ">BACKEND ENGINEERING</h1>
                <h1 className="text-neutral-300 py-[2px] px-[6px] bg-gradient-to-r from-red-600 to-violet-800 rounded-sm ">10/10</h1>
                </div>
                <div className="h-[10px] w-full bg-gradient-to-r from-neutral-600 to-neutral-400 rounded-2xl">
                    <div className="h-full w-[100%] bg-gradient-to-r from-red-600 to-violet-800 rounded-2xl"></div>
                </div>
            </div>
            <div className="py-3">
                <div className="flex justify-between items-center pb-3">   
                <h1 className="text-[18px] font-light text-neutral-300 ">WEB APPLICATION ENGINEERING</h1>
                <h1 className="text-neutral-300 py-[2px] px-[6px] bg-gradient-to-r from-red-600 to-violet-800 rounded-sm ">10/10</h1>
                </div>
                <div className="h-[10px] w-full bg-gradient-to-r from-neutral-600 to-neutral-400 rounded-2xl">
                    <div className="h-full w-[100%] bg-gradient-to-r from-red-600 to-violet-800 rounded-2xl"></div>
                </div>
            </div>
            <div className="py-3">
                <div className="flex justify-between items-center pb-3">   
                <h1 className="text-[18px] font-light text-neutral-300 ">DEVOPS ENGINEERING</h1>
                <h1 className="text-neutral-300 py-[2px] px-[6px] bg-gradient-to-r from-red-600 to-violet-800 rounded-sm ">9/10</h1>
                </div>
                <div className="h-[10px] w-full bg-gradient-to-r from-neutral-600 to-neutral-400 rounded-2xl">
                    <div className="h-full w-[90%] bg-gradient-to-r from-red-600 to-violet-800 rounded-2xl"></div>
                </div>
            </div>
            <div className="py-3">
                <div className="flex justify-between items-center pb-3">   
                <h1 className="text-[18px] font-light text-neutral-300 ">MOBILE APP DEVELOPMENT</h1>
                <h1 className="text-neutral-300 py-[2px] px-[6px] bg-gradient-to-r from-red-600 to-violet-800 rounded-sm ">10/10</h1>
                </div>
                <div className="h-[10px] w-full bg-gradient-to-r from-neutral-600 to-neutral-400 rounded-2xl">
                    <div className="h-full w-[100%] bg-gradient-to-r from-red-600 to-violet-800 rounded-2xl"></div>
                </div>
            </div>

        </div>
      </BackgroundGradient>
    </div>
  );
}
