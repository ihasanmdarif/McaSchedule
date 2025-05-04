"use client";

import { useState } from "react";
import { CricketNav } from "@/components/cricket-nav";

// Define match type for type safety
interface Match {
  id: number;
  date: Date;
  team1: string;
  team2: string;
  venue: string;
  isHome: boolean;
}

export default function Home() {
  const [activeView, setActiveView] = useState<string>("calendar");

  // Sample match data with proper typing
  const matches: Match[] = [
    {
      id: 1,
      date: new Date(2025, 0, 15),
      team1: "Bengla Tigers",
      team2: "Mumbai Strikers",
      venue: "Eden Gardens",
      isHome: true,
    },
    {
      id: 2,
      date: new Date(2025, 1, 5),
      team1: "Bengal Tigers 2",
      team2: "Delhi Dynamos",
      venue: "Feroz Shah Kotla",
      isHome: false,
    },
    {
      id: 3,
      date: new Date(2025, 1, 20),
      team1: "Bengla Tigers",
      team2: "Chennai Kings",
      venue: "Eden Gardens",
      isHome: true,
    },
    {
      id: 4,
      date: new Date(2025, 2, 10),
      team1: "Kolkata Warriors",
      team2: "Bengal Tigers 2",
      venue: "Salt Lake Stadium",
      isHome: false,
    },
    {
      id: 5,
      date: new Date(2025, 3, 5),
      team1: "Bengla Tigers",
      team2: "Rajasthan Royals",
      venue: "Eden Gardens",
      isHome: true,
    },
    {
      id: 6,
      date: new Date(2025, 3, 25),
      team1: "Punjab Legends",
      team2: "Bengal Tigers 2",
      venue: "Mohali Stadium",
      isHome: false,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <CricketNav onViewChange={setActiveView} />
      <main className="flex-1 p-6">
        <div className="grid gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">
              Bengla Tigers Club - 2025 Schedule
            </h1>
          </div>

          {/* Calendar View */}
          {activeView === "calendar" && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Calendar View</h2>
              <div className="grid grid-cols-7 gap-1 text-center font-medium">
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
              </div>
              <div className="grid grid-cols-7 gap-1 mt-2">
                {/* Sample calendar - first row with some empty days */}
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={`empty-${i}`}
                    className="aspect-square p-1 text-muted-foreground text-sm"
                  ></div>
                ))}
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={`day-${i + 1}`}
                    className="aspect-square border rounded-md p-1 text-sm"
                  >
                    <div className="font-medium">{i + 1}</div>
                    {i === 2 && (
                      <div className="mt-1 text-xs bg-green-100 text-green-800 rounded px-1 py-0.5 truncate">
                        Match
                      </div>
                    )}
                  </div>
                ))}

                {/* Second row */}
                {Array.from({ length: 7 }).map((_, i) => (
                  <div
                    key={`day-${i + 5}`}
                    className="aspect-square border rounded-md p-1 text-sm"
                  >
                    <div className="font-medium">{i + 5}</div>
                    {i === 0 && (
                      <div className="mt-1 text-xs bg-green-100 text-green-800 rounded px-1 py-0.5 truncate">
                        Match
                      </div>
                    )}
                  </div>
                ))}

                {/* Additional rows would continue here */}
              </div>
            </div>
          )}

          {/* List View */}
          {(activeView === "list" ||
            activeView === "upcoming" ||
            activeView === "home" ||
            activeView === "away") && (
            <>
              <h2 className="text-xl font-semibold mb-4">
                {activeView === "list" && "All Matches"}
                {activeView === "upcoming" && "Upcoming Matches"}
                {activeView === "home" && "Home Matches"}
                {activeView === "away" && "Away Matches"}
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {matches
                  .filter((match) => {
                    if (activeView === "home") return match.isHome;
                    if (activeView === "away") return !match.isHome;
                    return true;
                  })
                  .map((match) => (
                    <div key={match.id} className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Match #{match.id}</div>
                        <div className="text-sm text-muted-foreground">
                          {match.date.toLocaleDateString()}
                        </div>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div
                            className={`h-8 w-8 rounded-full ${
                              match.team1.includes("Bengal")
                                ? "bg-green-100 text-green-700"
                                : "bg-blue-100 text-blue-700"
                            } flex items-center justify-center`}
                          >
                            {match.team1.charAt(0)}
                          </div>
                          <div>{match.team1}</div>
                        </div>
                        <div className="text-sm font-medium">vs</div>
                        <div className="flex items-center gap-2">
                          <div>{match.team2}</div>
                          <div
                            className={`h-8 w-8 rounded-full ${
                              match.team2.includes("Bengal")
                                ? "bg-green-100 text-green-700"
                                : "bg-blue-100 text-blue-700"
                            } flex items-center justify-center`}
                          >
                            {match.team2.charAt(0)}
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 text-sm text-muted-foreground">
                        {match.isHome ? "Home" : "Away"} • {match.venue}
                      </div>
                    </div>
                  ))}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
