"use client"
import { HoverEffect } from "../components/ui/card-hover-effect";

export function Looking({title,disc}) {
  return (
    <div className="xl:w-[27%] border border-white rounded-lg px-4 py-10 bg-black lg:w-[32%] md:w-[100%] md:py-12">
     <h1 className="text-2xl font-bold bg-clip-text text-center text-transparent bg-gradient-to-r from-red-600 to-violet-800">{title}</h1>
     <p className="font-light text-[15px] text-white dark:text-neutral-300 pt-3 text-left md:text-center" >{disc}</p>
    </div>
  );
}
// export const projects = [
//   {
//     title: "Computer Vision",
//     description:
//       "Looking forward to contribute in computer vision with OpenCv",
//     link: "https://stripe.com",
//   },
//   {
//     title: "AL/ML",
//     description:
//        "Looking forward to contribute in AL/ML with Langchain and python",
//     link: "https://netflix.com",
//   },
//   {
//     title: "StartUp Plans",
//     description:
//       "With the support of YIP(Steyp's initiative) working for a startUp",
//     link: "https://google.com",
//   },
 
// ];
