import './animate.css';
import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "../components/ui/spotlight";
import { Nav } from "@/elements/Nav";
import { BentoGrid, BentoGridDemo } from "@/elements/BentoGrid";
import { Projects } from "@/elements/Projects";
import { Card } from "@/elements/Card";
import { Aim } from "@/elements/Aim";
import { Recommand } from "@/elements/Recommand";
import { AnimatedList } from "@/components/magicui/animated-list";
import Connect from "@/elements/Connect";
import CopyToClipboard from "@/elements/Connect";
import { FloatingNav } from "../components/ui/floating-navbar";
import {
  IconHome,
  IconMessage,
  IconUser,
  IconLamp,
  IconCloudComputing,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { Ex } from "@/elements/ex";
import { Skills } from "@/elements/Skills";
import { Steyp } from "@/elements/Steyp";
import { Stey } from "@/elements/Stey";
import { Project } from "@/elements/Project";
import { Time } from "@/elements/Time";
import { Promo } from '@/elements/Promo';

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
      icon: (
        <IconCloudComputing className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
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
      <div
        id="About"
        className="relative  h-full w-full overflow-x-hidden  bg-black/[0.94] antialiased py-8 px-4"
      >
        <h1 className="text-transparent text-center font-bold text-5xl pb-10 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text">
          More About Me
        </h1>
        {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div> */}

        <BentoGridDemo />
      </div>
      <div
        id="Project"
        className="relative flex h-full w-full bg-black/[0.96] antialiased pb-10"
      >
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
          <div className="flex flex-wrap items-center justify-center lg:gap-8 gap-4">
            <Project
              title={"Bloweb"}
              disc={
                "A blogging platform through which we can perform all CURD operations and also it has wide variety of cool features.User can create there profile, they can like, comment and we can visit the profiles of all users to."
              }
              link={"https://github.com/ziyaudheenms/blowebFrontent"}
              img={"/bloweb.png"}
              fram={"django"}
              fro={"React "}
              sty={"bootstrap "}
              bac={"Python"}
            />
            <Project
              title={"PW-Manager"}
              disc={
                "In this growing world we all are getting more and more engaged in internet, so to keep our various social media , network accounts we use various passwords, but there may be some cases where we might forget some passwords due to having many ."
              }
              link={"https://github.com/ziyaudheenms/password-manager"}
              img={"/pw.png"}
              fram={"django"}
              fro={"React "}
              sty={"bootstrap "}
              bac={"Python"}
            />
            <Project
              title={"Hourent"}
              disc={
                "Hourent is a fully dedicated platform for renting our properties, hourent is a virtual transparent agent between owner  and his customer. Through the platform we can rent our house, cabins etc."
              }
              link={"https://github.com/ziyaudheenms/Hourent"}
              img={"/hourent.png"}
              fram={"django"}
              fro={"Next "}
              sty={"Tailwind "}
              bac={"Python"}
            />
            <Project
              title={"BloggerAI"}
              disc={
                "In this platform we just need to provide the topic on which we want to generate content and the AI working behind will generate it.Llm used in this project is llama-3.3-70b-versatile."
              }
              link={"https://github.com/ziyaudheenms/blowebFrontent"}
              img={"/blogger.png"}
              fram={"django"}
              fro={"Next "}
              sty={"Tailwind "}
              bac={"Python"}
            />
          </div>
          <div className="flex justify-center my-5 w-full">
            <div className="w-full xl:w-[80%] lg:w-[98%] md:w-[65%] rounded-lg bg-black/[0.92] border-2 border-violet-800 p-4 shadow-md flex justify-center h-44 items-center">
              <h3 className="font-bold text-[18px] lg:text-2xl mg:text-2xl xl:text-2xl font-sans bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-violet-800 dark:text-white text-center">
                20+ UI/BACKEND PROJECTS
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div
        id="Skills"
        className="relative flex h-full w-full bg-black/[0.96] antialiased pb-10"
      >
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
            <Skills />
          </div>
          <div className=" w-full mx-auto   rounded-2xl mt-5 p-5">
            <h1 className="font-bold text-center my-4  text-2xl font-sans bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-violet-800 dark:text-white ">
              LOOKING FORWARD TO ..
            </h1>
            <div className="flex justify-center gap-5  lg:gap-1 lg:justify-between items-center flex-wrap">
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
      <div
        id="Experience"
        className="relative flex h-full w-full bg-black/[0.96] antialiased pb-20"
      >
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
      <div
        id="steyp"
        className="relative flex h-full w-full bg-black/[0.96] antialiased "
      >
        <div
          className={cn(
            "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
            "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
          )}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl p-4 ">
          <h1 className="text-4xl font-semibold text-white dark:text-white text-center">
          If You Are Interested In Technology I Would Suggest Steyp...
          </h1>
          <Promo />
        </div>
      </div>
      <div
        id="Experience"
        className="relative flex h-full w-full bg-black/[0.96] antialiased pb-10"
      >
        <div
          className={cn(
            "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
            "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
          )}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl p-4 ">
          <h1 className="text-transparent text-center font-bold text-5xl pb-2 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text">
            Steyp through my Journey
          </h1>
        </div>
      </div>

      <div
        id="steyp"
        className="relative flex h-full w-full justify-center bg-black/[0.96] antialiased "
      >
        <div
          className={cn(
            "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
            "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
          )}
        />

        <div className="flex flex-wrap  justify-center items-center gap-10 md:gap-8 lg:gap-10 w-full max-w-7xl p-4 pt-20">
          <Time
            time={1}
            head={"Provided a Clear Foundation in Web Page Desiging."}
            on={"HTML"}
            tw={"CSS"}
            thre={"BOOTSTRAP"}
            four={"Made wide variety of projects"}
            conclution={
              "Became Capable to build basic webPage designs, robustly learned the basics of web page designing."
            }
            type={"FRONTEND"}
          />
          <Time
            time={2}
            head={"Made a strong base in Web application development"}
            on={"JAVASCRIPT"}
            tw={"REACT JS"}
            thre={"JQUERY"}
            four={"Frontent Projects was made with Ease"}
            conclution={
              "Became Capable to build basic web applications, robustly learned the basics of web application dev"
            }
            type={"FRONTEND"}
          />
          <Time
            time={3}
            head={"Learned how backend works in real world problems"}
            on={"PYTHON"}
            tw={"DJANGO"}
            thre={"DATABASE"}
            four={"completed Complex backend projects "}
            conclution={
              "Became Capable to build backend systems, robustly learned the basics of backend development."
            }
            type={"BACKEND"}
          />
          <Time
            time={4}
            head={"Combined all the skills to build complete products"}
            on={"REST API(DJANGO)"}
            tw={"DEVOPS"}
            thre={"REACT NATIVE"}
            four={"Mobile applications were made."}
            conclution={
              "Became Capable to build full stack solutions, robustly learned the basics of full stack engineering."
            }
            type={"FULLSTACK"}
          />
        </div>
      

        
      </div>
      <div
        id="contact"
        className="relative flex h-full w-full bg-black/[0.96] antialiased pb-10 pt-10"
      >
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
          <h1 className="bg-gradient-to-b from-red-600 to-violet-800 bg-clip-text text-transparent font-medium">
            ZIYAUDHEEN M.S
          </h1>
          <h3 className="bg-gradient-to-b from-red-600 to-violet-800 bg-clip-text text-transparent font-medium">
            Master Tutor@Steyp
          </h3>
        </div>
        <div>
          <h1 className="text-white text-center text-sm md:text-base">
            &copy; 2025 My Portfolio. All rights reserved.
          </h1>
        </div>
        <div className="flex gap-2 flex-wrap ">
          <div className="bg-gradient-to-b from-red-600 to-violet-800 rounded-sm">
            <Link
              href={"https://www.linkedin.com/in/ziyaudheen-ms-b73a75337/"}
              target="_blank"
            >
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
