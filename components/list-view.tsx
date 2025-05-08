"use client";

import { Match, useAppContext } from "@/context/AppContext";
import { cn, formattedAppDate, getProxiedImageUrl } from "@/lib/utils";
import Image from "next/image";
import { useMemo } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
  matches: Match[];
};
export const ListView = ({ matches }: Props) => {
  const { activeView, selectedTeamId } = useAppContext();

  const filteredMatches = useMemo(() => {
    return matches
      .sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA.getTime() - dateB.getTime();
      })
      .filter((match) => {
        if (activeView === "home") return match.isHome;
        if (activeView === "away") return !match.isHome;
        return true;
      })
      .filter((match) => {
        if (selectedTeamId === "1") return true;
        if (selectedTeamId == "2") return match.teamId === "1";
        if (selectedTeamId == "3") return match.teamId === "2";
      });
  }, [matches, selectedTeamId, activeView]);

  return (
    activeView !== "calendar" && (
      <div className="bg-white rounded-lg shadow-md p-4 md:max-w-5xl md:mx-auto">
        <span className="text-lg font-semibold mb-4">
          Total: {filteredMatches.length} Matches
        </span>
        <div className="grid gap-4 mx-auto">
          {filteredMatches.map((match) => (
            <div
              key={match.id}
              className={cn("p-6  border-b last:border-0", {
                "bg-orange-50 rounded-sm":
                  match.isHome && activeView === "list",
              })}
            >
              <div className="flex flex-col gap-4 items-center sm:flex-row">
                <div className="gap-3 flex flex-col items-center">
                  <span className="text-sm uppercase border px-2 rounded-sm border-red-400">
                    match id: {match.id}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-md font-semibold">
                      {formattedAppDate(match.date)}
                    </span>
                    <div className="flex gap items-center">
                      <span>{match.time} AM</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-1 gap-3">
                  <span className="text-sm text-muted-foreground capitalize text-center">
                    {match.venue}
                  </span>
                  <div className="flex flex-col items-start justify-between  gap-4 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-2 flex-1">
                      <Image
                        src={
                          match.isHome
                            ? getProxiedImageUrl("/assets/teams/129.png")
                            : getProxiedImageUrl(match.opponentLogo)
                        }
                        width="60"
                        height="60"
                        className="rounded-full"
                        alt="Home team logo"
                      />
                      <span className="capitalize font-semibold">
                        {match.home}
                      </span>
                    </div>
                    <div className="flex-1 w-full flex items-center justify-center">
                      <Image
                        src="/versus.png"
                        width="20"
                        height="20"
                        alt="versus"
                      />
                    </div>
                    <div className="flex items-center  gap-2 flex-1">
                      <Image
                        src={
                          !match.isHome
                            ? getProxiedImageUrl("/assets/teams/129.png")
                            : getProxiedImageUrl(match.opponentLogo)
                        }
                        width="60"
                        height="60"
                        className="rounded-full"
                        alt="Home team logo"
                      />
                      <span className="capitalize font-semibold">
                        {match.away}
                      </span>
                    </div>
                    <Button className="self-center">
                      <Link href={`/match/${match.id}`}>Match Center</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};
