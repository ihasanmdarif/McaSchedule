"use client";
import { cn, formatDateTime } from "@/libs/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
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

  const [hidePrevGames, setHidePrevGames] = useState(false);

  const [gameSchedule, setGameSchedule] = useState<Schedule[]>(scheduleList);

  const handleChange = () => {
    setHidePrevGames(!hidePrevGames);
  };

  useEffect(() => {
    if (hidePrevGames) {
      const filteredSchedule = scheduleList.filter((schedule) => {
        const dateString = formatDateTime(schedule["1"]).formatedDateShort;
        const date = new Date(dateString);
        const currentDate = new Date();
        return date >= currentDate;
      });
      console.log(filteredSchedule);
      setGameSchedule(filteredSchedule);
    } else {
      setGameSchedule(scheduleList);
    }
  }, [hidePrevGames, scheduleList]);

  return (
    <div className="h-full w-full sm:w-auto">
      <div className="px-2 py-2 flex flex-col gap-2 sticky top-0  bg-white">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 place-items-start gap-2 sm:place-items-center">
          {navs.map((nav, ind) => {
            return (
              <Link
                key={ind}
                href={nav.href}
                className={cn(
                  `text-sm sm:text-3xl font-platypi p-2 rounded-sm text-center m-auto underline`,
                  {
                    "bg-cyan-700 text-white no-underline":
                      nav.text === teamName,
                  }
                )}
              >
                {nav.text}
              </Link>
            );
          })}
          <div className="flex col-span-auto">
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
          <div className="flex col-span-2 sm:col-span-1">
            <div
              className={cn("flex justify-center items-center gap-2 p-2", {
                "bg-gray-700 text-white rounded": hidePrevGames,
              })}
            >
              <label htmlFor="hidePrevGames" className="select-none">
                Hide Previous Games
              </label>
              <input
                type="checkbox"
                id="hidePrevGames"
                className="appearance-none checked:bg-red-500 "
                checked={hidePrevGames}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        {showCalendarView && <CalendarView schedules={gameSchedule} />}
        {!showCalendarView && <ScheduleTable schedules={gameSchedule} />}
      </div>
    </div>
  );
}
