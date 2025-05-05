"use client";

import { CricketNav } from "@/components/cricket-nav";
import { ListView } from "@/components/list-view";
import { useAppContext } from "@/context/AppContext";
import matches from "@/data/2025.json";

export default function Home() {
  const { activeView, teams, selectedTeamId, selectedYear } = useAppContext();

  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      <CricketNav />
      <main className="flex-1 p-4">
        <div className="grid gap-6">
          <div className="flex justify-center">
            <h1 className="text-3xl font-bold tracking-tight my-4">
              {teams.find((p) => p.id == selectedTeamId)?.name} - {selectedYear}
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
          <ListView matches={matches} />
        </div>
      </main>
    </div>
  );
}
