import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import clsx from "clsx";

const InfoCard = ({
  type,
  total,
  card,
}: {
  type: string;
  total: number;
  card: number;
}) => {
  const date = new Date();

  return (
    <Card
      className={clsx("flex flex-col p-5 justify-between flex-1 bg-card", {
        "bg-yellow-300 dark:bg-yellow-300 ": card === 0,
        "bg-pink-300 dark:bg-pink-400 ": card === 1,
        "bg-blue-300 dark:bg-blue-400 ": card === 2,
        "bg-red-300 dark:bg-red-400 ": card === 3,
      })}
    >
      <Badge
        className={clsx(`w-max text-[10px] md:text-xs shadow-none bg-white`)}
      >
        {date.getDate() + "/" + date.getUTCDay() + "/" + date.getFullYear()}
      </Badge>

      <Separator className={clsx(`my-3 border border-white`)} />
      <span className={clsx("font-bold text-white text-2xl md:text-3xl", {})}>
        {total}
      </span>
      <span className="font-medium text-xs md:text-base text-zinc-100 dark:text-secondary-foreground">
        {type}
      </span>
    </Card>
  );
};

export default InfoCard;
