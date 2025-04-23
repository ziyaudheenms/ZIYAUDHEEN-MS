"use client"
import { HoverEffect } from "../components/ui/card-hover-effect";

export function Looking() {
  return (
    <div className="max-w-[1090px] mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Computer Vision",
    description:
      "Looking forward to contribute in computer vision with OpenCv",
    link: "https://stripe.com",
  },
  {
    title: "AL/ML",
    description:
       "Looking forward to contribute in AL/ML with Langchain and python",
    link: "https://netflix.com",
  },
  {
    title: "StartUp Plans",
    description:
      "With the support of YIP(Steyp's initiative) working for a startUp",
    link: "https://google.com",
  },
 
];
