"use client";

import React from "react";
import { cn } from "@/app/lib/utils/cn";
import { BentoGrid, BentoGridItem } from "@/app/components/ui/BentoGrid";
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

function Problems() {
  const GridImg = ({ url }) => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
      <img className="w-full h-full rounded-md" src={url} />
    </div>
  );
  const items = [
    {
      title: "Limited access to timely medical services",
      description:
        "Many individuals face delays in accessing critical medical care, leading to preventable fatalities.",
      header: <GridImg url={"/problem1.jpg"} />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Insufficient medical facilities in urban and rural area",
      description:
        "Current methods for booking appointments are cumbersome and time-consuming, hindering access to care.",
      header: <GridImg url={"/problem2.jpg"} />,
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Challenges in hospital bed management",
      description:
        "Hospitals struggle with bed allocation, resulting in shortages during emergencies.",
      header: <GridImg url={"/problem3.jpg"} />,

      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Lack of systematic approach to appointments and bed booking",
      description:
        "The absence of streamlined processes leads to confusion and inefficiencies in healthcare delivery",
      header: <GridImg url={"/problem4.jpg"} />,
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Pursuit of Knowledge",
      description: "Join the quest for understanding and enlightenment.",
      header: <GridImg url={"/problem5.jpg"} />,
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <BentoGrid className="max-w-7xl mx-auto mt-8 mb-16">
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

export default Problems;
