"use client";

import {
  cn,
  extractImgSrc,
  extractTeamName,
  formatDateTime,
} from "@/libs/utils";
import Link from "next/link";

type Schedule = {
  "1": string;
  "2": string;
  "3": string;
  "4": string;
  "5": string;
  home: string;
  away: string;
};

type ScheduleTableProps = {
  schedules: Schedule[];
  teamName: string;
};
const navs = [
  {
    href: "/generate",
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

const ScheduleTable = ({ schedules, teamName }: ScheduleTableProps) => {
  return (
    <div className="overflow-auto">
      <div className="flex flex-col items-center p-4">
        <div className="flex flex-col col gap-2">
          <h3 className="text-lg sm:text-xl md:text-2xl font-platypi text-center">
            MCA SUMMER LEAGUE 2024
          </h3>
          <div className="flex gap-2 mb-4">
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
          </div>
        </div>
        <div className="h-full w-full sm:w-auto overflow-scroll">
          <table className="w-full min-w-max table-auto">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th>Date</th>
                <th>Time</th>
                <th>Home</th>
                <th>Away</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {schedules.map((schedule, ind) => {
                return (
                  <tr
                    key={ind}
                    className={cn("whitespace-nowrap", {
                      "bg-cyan-100": isHomeGame(schedule.home),
                    })}
                  >
                    <td className=" font-bold">
                      {formatDateTime(schedule["1"]).formatedDate}
                    </td>
                    <td>{formatDateTime(schedule["1"]).time}</td>
                    <td>
                      <div className="flex flex-col justify-center items-center">
                        <img
                          className="rounded-full w-12 h-12"
                          src={`https://cricketsasa.ca/cricket/${extractImgSrc(
                            schedule.home
                          )}`}
                          alt={extractTeamName(schedule.home)}
                        ></img>
                        <span>{extractTeamName(schedule.home)}</span>
                      </div>
                    </td>
                    <td>
                      <div className="flex flex-col justify-center items-center">
                        <img
                          className="rounded-full w-12 h-12"
                          src={`https://cricketsasa.ca/cricket/${extractImgSrc(
                            schedule.away
                          )}`}
                          alt={extractTeamName(schedule.away)}
                        ></img>
                        <span>{extractTeamName(schedule.away)}</span>
                      </div>
                    </td>
                    <td className="font-bold">{schedule["3"]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const isHomeGame = (teamName: string) => {
  const filteredTeamName = extractTeamName(teamName);

  return filteredTeamName.toLowerCase().includes("bengal tigers");
};

export default ScheduleTable;
