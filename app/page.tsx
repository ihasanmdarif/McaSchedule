"use client";
import { parse } from "date-fns";
import { CalendarView } from "@/components/Calendar-view";
import { CricketNav } from "@/components/cricket-nav";
import { ListView } from "@/components/list-view";
import { useAppContext } from "@/context/AppContext";
import matches from "@/data/2025.json";
import { format, toZonedTime } from "date-fns-tz";
import { useMemo } from "react";

export default function Home() {
  const { activeView, teams, selectedTeamId } = useAppContext();

  const filteredMatches = useMemo(() => {
    return matches
      .sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA.getTime() - dateB.getTime();
      })
      .filter((match) => {
        // Winnipeg timezone
        const timeZone = "America/Winnipeg";
        const today = toZonedTime(new Date(), timeZone);
        const matchDateLocal = parse(match.date, "yyyy-MM-dd", new Date());
        const matchDateString = format(matchDateLocal, "yyyy-MM-dd", {
          timeZone,
        });
        const todayDateString = format(today, "yyyy-MM-dd", { timeZone });
        if (activeView === "past-matches") {
          return matchDateString < todayDateString;
        }
        return matchDateString >= todayDateString;
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
  }, [selectedTeamId, activeView]);

  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      <CricketNav />
      <main className="flex-1 p-4 mt-16 md:mt-0">
        <div className="grid gap-6">
          <div className="flex justify-center">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight my-4">
              {`Schedule of ${
                teams.find((p) => p.id == selectedTeamId)?.name
              } `}
            </h1>
          </div>

          {/* Calendar View */}
          {activeView === "calendar" && (
            <div className="md:w-[800px] sm:h-[500px] mx-auto overflow-auto my-4">
              <CalendarView matches={filteredMatches} />
            </div>
          )}
          <ListView matches={filteredMatches} />
        </div>
      </main>
    </div>
  );
}
