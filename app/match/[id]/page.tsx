"use client";
import { useParams } from "next/navigation";
import matches from "@/data/2025.json";
import { CricketNav } from "@/components/cricket-nav";
import MatchDayPoster from "@/components/match-day-poster";
import { Button } from "@/components/ui/button";

export default function MatchPage() {
  const { id: matchId } = useParams();

  // Find the match with the given ID
  const match = matches.find((match) => match.id === matchId);
  if (!match) {
    return <div>Match not found</div>;
  }

  return (
    <div>
      <CricketNav hideTeamSelection />
      <main className="flex-1 p-4 mt-16">
        <MatchDayPoster match={match} />
      </main>
    </div>
  );
}
