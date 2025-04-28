import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-[980px] mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = ({ src }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <Image
      src={src}
      alt="Description of the image"
      layout="responsive"
      width={100}
      height={30}
      className="rounded-md bg-contain bg-center"
    />
  </div>
);
const Skeleton3 = ({ src }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 justify-center ">
    <Image
      src={src}
      alt="Description of the image"
      width={40}
      height={30}
      className="w-[30%] items-center justify-center rounded-md bg-contain bg-center"
    />
  </div>
);
const Skeleton2 = ({ src }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-white justify-center">
    <img
      src={src}
      alt="Description of the image"
      
      className=""
    />
  </div>
);
const items = [
  {
    title: "5 years of experience",
    description: "a continuous tech learner for past 5 years",
    header: <Skeleton src={"/ziya2.jpg"} />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Mentality to solve..",
    description:
      "completed 4 full stack projects and currently working on a SaaS",
    header: <Skeleton src={"/solve.avif"} />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Passion to code",
    description: "The Passion to code is the driving force behind my work.",
    header: <Skeleton src={"/key.png"} />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Empowered by STEYP",
    description:
      "STEYP has a major role in elevating my knowledge graph with technology in past 1.5 years.",
    header: <Skeleton2 src={"/steyp.png"} />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Wide Variety of Knowledge..",
    description: "Industry ready tech stack for solving .",
    header: <Skeleton src={"/solve2.jpg"} />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Dedication and discipline",
    description: "Qualities what my works assures to it's clients.",
    header: <Skeleton src={"/dec2.jpg"} />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Looking forward to contribute..",
    description: "in the fild of AI/ML to uplift the humanity.",
    header: <Skeleton src={"/img.webp"} />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
