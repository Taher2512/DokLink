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
      title: "Long Wait Times",
      description:
        "Patients often face long wait times for doctor appointments and hospital admissions, causing stress and potential health risks.",
      header: <GridImg url={"/problem1.jpg"} />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Inadequate Emergency Response",
      description:
        "During critical situations, coordinating with emergency services like police and ambulances is often slow and inefficient.",
      header: <GridImg url={"/problem2.jpg"} />,
      // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Limited Access to Real Time Information",
      description:
        "Patients lack access to real-time updates on doctor availability, hospital bed status, and emergency services.",
      header: <GridImg url={"/problem3.jpg"} />,

      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Inadequate Emergency Response",
      description:
        "During critical situations, coordinating with emergency services like police and ambulances is often slow and inefficient.",
      header: <GridImg url={"/problem4.jpg"} />,
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Disorganized Medical Records",
      description:
        "Patients struggle with maintaining and accessing their medical records, leading to fragmented healthcare experiences.",
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
