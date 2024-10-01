"use client";

import { TrendingUp } from "lucide-react";
import { LabelList, RadialBar, RadialBarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A radial chart with a label";

const chartData = [
  { count: "Total", students: 475, fill: "hsl(var(--chart-1))" },
  { count: "Boys", students: 275, fill: "hsl(var(--chart-4))" },
  { count: "Girls", students: 200, fill: "hsl(var(--chart-3))" },
];

const chartConfig = {
  students: {
    label: "Students",
  },
} satisfies ChartConfig;

export function RadialChart() {
  return (
    <Card className="flex flex-col w-full h-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>Radial Chart - Label</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={-90}
            endAngle={360}
            innerRadius={30}
            outerRadius={110}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="browser" />}
            />
            <RadialBar dataKey="students" background>
              <LabelList
                position="insideStart"
                dataKey="students"
                className="fill-black capitalize mix-blend-luminosity"
                fontSize={11}
              />
            </RadialBar>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex gap-2 items-center">
          <div className="contents">
            <div className="bg-chart-1 w-10 h-5 inline-block"></div>
            <span>Total</span>
          </div>
          <div className="contents">
            <div className="bg-chart-4 w-10 h-5 inline-block"></div>
            <span>Boys</span>
          </div>
          <div className="contents">
            <div className="bg-chart-3 w-10 h-5 inline-block"></div>
            <span>Girls</span>
          </div>
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total students for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}