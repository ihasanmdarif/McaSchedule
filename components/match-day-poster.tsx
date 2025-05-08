"use client";

import { useRef, useState } from "react";
import { Calendar, Clock, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Match } from "@/context/AppContext";
import html2canvas from "html2canvas";
import { getProxiedImageUrl } from "@/lib/utils";

type props = {
  match: Match;
};
export default function MatchDayPoster({ match }: props) {
  const [isAnimating, setIsAnimating] = useState(false);

  const posterRef = useRef<HTMLDivElement>(null);

  const downloadPoster = async () => {
    if (!posterRef.current) return;

    const randomizedFileNameWithLetters = `match-day-poster-${Math.random()
      .toString(36)
      .substring(2, 15)}.png`;

    try {
      // Temporarily remove animation class for capture
      setIsAnimating(false);

      const canvas = await html2canvas(posterRef.current, {
        scale: 2, // Higher quality
        backgroundColor: null,
        logging: true,
        useCORS: true,
        allowTaint: true,
      });

      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = randomizedFileNameWithLetters;
      link.click();
    } catch (error) {
      console.error("Error generating poster:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card
        ref={posterRef}
        className="relative w-full max-w-3xl overflow-hidden bg-gradient-to-br from-red-900 via-rose-800 to-pink-900 text-white shadow-2xl"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-full h-32 bg-yellow-500 opacity-10 transform -skew-y-6"></div>
          <div className="absolute bottom-0 right-0 w-full h-32 bg-red-500 opacity-10 transform skew-y-6"></div>
        </div>

        {/* Header */}
        <div className="relative pt-8 px-6 text-center">
          <div className="uppercase tracking-widest text-yellow-400 font-bold mb-2">
            {match.teamId == "1" ? "Premiere Division" : "Division 2"}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
            MATCH DAY
          </h1>
          <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
        </div>

        {/* Teams */}
        <div
          className={`relative  flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 px-6 py-8 transition-transform duration-500 ${
            isAnimating ? "scale-110" : ""
          }`}
          onMouseEnter={() => setIsAnimating(true)}
          onMouseLeave={() => setIsAnimating(false)}
        >
          {/* Team 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full bg-white p-2 mb-4 flex items-center justify-center">
              <img
                src={getProxiedImageUrl(
                  match.isHome ? "/assets/teams/129.png" : match.opponentLogo,
                )}
                className="w-full h-full object-cover rounded-full"
                alt="Home team logo"
                crossOrigin="anonymous"
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold capitalize">
              {match.home}
            </h2>
            <p className="text-gray-300">Home Team</p>
          </div>

          {/* VS */}
          <div className="flex flex-col items-center my-4 md:my-0">
            <div className="text-5xl font-black text-yellow-400">VS</div>
          </div>

          {/* Team 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full bg-white p-2 mb-4 flex items-center justify-center">
              <img
                src={getProxiedImageUrl(
                  !match.isHome ? "/assets/teams/129.png" : match.opponentLogo,
                )}
                className="w-full h-full object-cover rounded-full"
                alt="Away team logo"
                crossOrigin="anonymous"
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">{match.away}</h2>
            <p className="text-gray-300">Away Team</p>
          </div>
        </div>

        {/* Match Details */}
        <div className="relative  bg-black bg-opacity-30 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <Calendar className="mr-2 text-yellow-400" />
              <div>
                <p className="text-sm text-gray-300">Date</p>
                <p className="font-semibold">{match.date}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 text-yellow-400" />
              <div>
                <p className="text-sm text-gray-300">Time</p>
                <p className="font-semibold">{match.time}</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 text-yellow-400" />
              <div>
                <p className="text-sm text-gray-300">Venue</p>
                <p className="font-semibold">{match.venue}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative  p-6 text-center">
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
            Scoreboard
          </Button>
          <p className="mt-4 text-sm text-gray-300">
            #BT2025 #GameDay #Cricket
          </p>
        </div>
      </Card>
      <Button
        onClick={downloadPoster}
        className="mt-6 bg-purple-600 hover:bg-purple-700"
      >
        <Download className="mr-2 h-4 w-4" />
        Download Poster
      </Button>
    </div>
  );
}
