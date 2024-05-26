"use client";
import { cn } from "@/libs/utils";
import Link from "next/link";
import { useState } from "react";
import { CalendarView } from "./CalendarView";
import ScheduleTable, { Schedule } from "./ScheduleTable";
import { ListBulletIcon, CalendarIcon } from "@heroicons/react/24/solid";

type NavProps = {
  teamName: string;
  scheduleList: Schedule[];
};
export function Nav({ teamName, scheduleList }: NavProps) {
  const navs = [
    {
      href: "/generate?team=all",
      text: "All Teams",
    },
    {
      href: "/generate?team=bt",
      text: "Bengal Tigers",
    },
    {
      href: "/generate?team=bt2",
      text: "Bengal Tigers 2",
    },
  ];

  const [showCalendarView, setShowCalendarView] = useState(false);
  return (
    <div className="h-full w-full sm:w-auto">
      <div className="flex flex-row gap-2 mb-4 items-center sticky top-0 bg-white px-2 py-4">
        {navs.map((nav, ind) => {
          return (
            <Link
              key={ind}
              href={nav.href}
              className={cn(
                `text-sm sm:text-3xl font-platypi p-2 rounded-sm text-center m-auto underline`,
                {
                  "bg-cyan-700 text-white no-underline": nav.text === teamName,
                }
              )}
            >
              {nav.text}
            </Link>
          );
        })}
        <div className="flex">
          <button
            onClick={() => setShowCalendarView(false)}
            className={cn(
              "text-sm sm:text-3xl font-platypi p-2 rounded-sm text-center m-auto",
              { "bg-slate-200": !showCalendarView }
            )}
          >
            <ListBulletIcon className="size-6" />
          </button>
          <button
            onClick={() => setShowCalendarView(true)}
            className={cn(
              "text-sm sm:text-3xl font-platypi p-2 rounded-sm text-center m-auto ",
              { "bg-slate-200": showCalendarView }
            )}
          >
            <CalendarIcon className="size-6" />
          </button>
        </div>
      </div>
      {showCalendarView && <CalendarView schedules={scheduleList} />}
      {!showCalendarView && <ScheduleTable schedules={scheduleList} />}
    </div>
  );
}
