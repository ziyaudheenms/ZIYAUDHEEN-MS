import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "../components/ui/spotlight";
import { Nav } from "@/elements/Nav";
import { BentoGrid, BentoGridDemo } from "@/elements/BentoGrid";
import { Projects } from "@/elements/Projects";
import { Card } from "@/elements/Card";
import { Aim } from "@/elements/Aim";
import { Recommand } from "@/elements/Recommand";
import Connect from "@/elements/Connect";
import CopyToClipboard from "@/elements/Connect";
import { FloatingNav } from "../components/ui/floating-navbar"
import { IconHome, IconMessage, IconUser,IconLamp,IconCloudComputing } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { Ex } from "@/elements/ex";
export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#About",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "#Skills",
      icon: <IconLamp className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Experience",
      link: "#Experience",
      icon: <IconCloudComputing className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <>
      <FloatingNav navItems={navItems} />
      <div className="relative flex h-screen w-full overflow-hidden  bg-black/[0.96] antialiased md:items-center md:justify-center">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
            "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
          )}
        />

        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-[60%] md:pt-20">
          <h1 className="bg-opacity-50  bg-gradient-to-b from-red-600 to-violet-800 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
            ZIYAUDHEEN M.S
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-center text-xl font-light text-neutral-300">
            I am a passionate software engineer with a focus on web development.
            I am always eager to learn and grow in my field.
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Let's Connect Together
              </span>
            </button>
          </div>
        </div>
      </div>
      <div id="About" className="relative  h-full w-full overflow-x-hidden  bg-black/[0.94] antialiased py-8 px-4">
        <h1 className="text-transparent text-center font-bold text-5xl pb-10 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text">
          More About Me
        </h1>
        {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div> */}

        <BentoGridDemo />
      </div>
      <div id="Project" className="relative flex h-full w-full bg-black/[0.96] antialiased pb-10">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
            "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
          )}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl p-4 md:pt-20">
          <h1 className="text-transparent text-center font-bold text-5xl pb-2 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text">
            Projects That Speaks
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-center text-xl font-light text-neutral-300 pb-10">
            Full stack projects that are meant to define my ability in problem
            solving .
          </p>
          <Projects />
          <div className="flex justify-center my-5">
            <div className="w-full max-w-sm rounded-lg bg-black/[0.92] border-2 border-violet-800 p-4 shadow-md flex justify-center h-44 items-center">
              <h3 className="font-bold text-2xl font-sans bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-violet-800 dark:text-white">
                20 + UI/BACKEND PROJECTS
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div id="Skills" className="relative flex h-full w-full bg-black/[0.96] antialiased pb-10">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
            "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
          )}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl p-4 md:pt-20">
          <h1 className="text-transparent text-center font-bold text-5xl pb-2 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text">
            Skills That Defines Me
          </h1>
          <p className="mx-auto  mt-4 max-w-lg text-center text-xl font-light text-neutral-300 pb-13">
            Skills I have to Solve problems in industrial standerds
          </p>
          <div className="flex justify-center flex-wrap md:justify-start gap-5 md:gap-11">
            <div>
              <Card />
            </div>
            <div className="rounded-[22px]  p-4 sm:p-10 bg-black dark:bg-zinc-900 border-2 border-violet-700">
              <h1 className="font-bold text-center text-2xl font-sans bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-violet-800 dark:text-white pt-10">
                PROGRAMMING SKILLS THAT I DEAL WITH
              </h1>
              <div className="py-3 flex flex-wrap gap-4 justify-center">
                <button className="p-[3px] relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                    HTML/CSS
                  </div>
                </button>
                <button className="p-[3px] relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                    JAVASCRIPT
                  </div>
                </button>
                <button className="p-[3px] relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                    PYTHON
                  </div>
                </button>
                <button className="p-[3px] relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                    C++
                  </div>
                </button>
              </div>
              <h1 className="  text-2xl font-medium bg-clip-text text-transparent pt-5 text-center bg-gradient-to-r from-neutral-50 to-neutral-400 dark:text-white">
                FRAMEWORKS THAT POWERS
              </h1>
              <div className="flex gap-4 py-3 flex-wrap justify-center">
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  REACT JS
                </button>
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  NEXT JS
                </button>
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  DJANGO
                </button>
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  OPEN CV
                </button>
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  LANGCHAIN
                </button>
              </div>
              <h1 className="  text-2xl font-medium bg-clip-text text-transparent pt-5 text-center bg-gradient-to-r from-neutral-50 to-neutral-400 dark:text-white">
                UTILITIES THAT BOOSTS
              </h1>
              <div className="flex gap-3 py-3 flex-wrap justify-center">
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    TAILWIND CSS
                  </span>
                </button>
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    ACETERNITY UI
                  </span>
                </button>
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    GITHUB
                  </span>
                </button>
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    PG-ADMIN 4
                  </span>
                </button>
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    GITHUB
                  </span>
                </button>
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    HERO UI
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full  bg-black border-2 border-red-600 rounded-2xl mt-5 p-5">
            <h1 className="font-bold  text-2xl font-sans bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-violet-800 dark:text-white ">
              LOOKING FORWARD TO ..
            </h1>
            <div className="flex justify-center gap-4 items-center flex-wrap">
              <Aim
                disc={
                  "Looking forward to contribute in computer vision with OpenCv"
                }
                title={"Computer Vision"}
              />
              <Aim
                disc={
                  "Looking forward to contribute in AL/ML with Langchain and python"
                }
                title={"AL/ML"}
              />
              <Aim
                disc={
                  "With the support of YIP(Steyp's initiative) working for a startUp"
                }
                title={"StartUp Plans"}
              />
            </div>
          </div>
        </div>
      </div>
      <div id="Experience" className="relative flex h-full w-full bg-black/[0.96] antialiased pb-10">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
            "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
          )}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl p-4 md:pt-20">
          <h1 className="text-transparent text-center font-bold text-5xl pb-2 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text">
            Experience that stands out 
          </h1>
          <p className="mx-auto  mt-4 max-w-lg text-center text-xl font-light text-neutral-300 pb-13">
            Experiences that improves my standerd
          </p>
          <Ex />
          
        </div>
      </div>
      <div id="steyp" className="relative flex h-full w-full bg-black/[0.96] antialiased pb-10">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
            "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
          )}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl p-4 ">
          <Recommand />
        </div>
      </div>
      <div id="contact" className="relative flex h-full w-full bg-black/[0.96] antialiased pb-10">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
            "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
          )}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl p-4 md:pt-20">
          <h1 className="text-transparent text-center font-bold text-2xl md:text-3xl pb-2 bg-gradient-to-b from-red-600 to-violet-800 bg-clip-text">
            Let’s connect together and build the NextGen <br></br> technologies{" "}
            to uplift the world.
          </h1>
          <div className="flex my-4 justify-center items-center ">
            <CopyToClipboard />
          </div>
        </div>
      </div>
      <div className="w-full bg-black p-5 flex md:justify-between items-center md:flex-row flex-col justify-center gap-4  ">
        <div className="flex flex-col justify-center items-center md:items-start">
          <h1 className="bg-gradient-to-b from-red-600 to-violet-800 bg-clip-text text-transparent font-medium">ZIYAUDHEEN M.S</h1>
          <h3 className="bg-gradient-to-b from-red-600 to-violet-800 bg-clip-text text-transparent font-medium">Master Tutor@Steyp</h3>
        </div>
        <div>
          <h1 className="text-white">
            &copy; 2025 My Portfolio. All rights reserved.
          </h1>
        </div>
        <div className="flex gap-2 flex-wrap ">
          <div className="bg-gradient-to-b from-red-600 to-violet-800 rounded-sm">
            <Link href={"https://www.linkedin.com/in/ziyaudheen-ms-b73a75337/"} target="_blank">
            <Image src="/link.png" alt="LinkedIn" height={40} width={40} />
            </Link>
          </div>

          <div className="bg-gradient-to-b from-red-600 to-violet-800 rounded-sm">
            <Link href={"https://mail.google.com/"} target="_blank">
            <Image src="/mail.png" alt="LinkedIn" height={40} width={40} />
            </Link>
          </div>
          <div className="bg-gradient-to-b from-red-600 to-violet-800 rounded-sm">

            <Link href={"https://github.com/ziyaudheenms"} target="_blank">
            <Image src="/git.png" alt="LinkedIn" height={40} width={40} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

