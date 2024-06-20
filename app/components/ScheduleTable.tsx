"use client";

import {
  cn,
  extractImgSrc,
  extractTeamName,
  formatDateTime,
} from "@/libs/utils";

export type Schedule = {
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
};

const ScheduleTable = ({ schedules }: ScheduleTableProps) => {
  return (
    <div className="h-full w-full sm:w-auto">
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
                className={cn("whitespace-nowrap  ", {
                  "bg-cyan-100 rounded border-t-4 border-white": isHomeGame(
                    schedule.home
                  ),
                })}
              >
                <td className="font-bold">
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
  );
};

const isHomeGame = (teamName: string) => {
  const filteredTeamName = extractTeamName(teamName);
  return filteredTeamName.toLowerCase().includes("bengal tigers");
};

export default ScheduleTable;
