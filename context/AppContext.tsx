// context/AppContext.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Team = {
  id: string;
  name: string;
};

export type Match = {
  id: string;
  date: string;
  time: string;
  venue: string;
  isHome: boolean;
  opponentLogo: string;
  home: string;
  away: string;
  teamId: string;
};

type AppContextType = {
  // Schedule View state
  activeView: string;
  selectedTeamId: string;
  selectedYear: number;
  teams: Team[];
  handleTeamChange: (teamId: string) => void;
  handleYearChange: (year: number) => void;
  handleViewChange: (view: string) => void;
};

const currentYear = new Date().getFullYear();
const teams = [
  {
    id: "1",
    name: "Both Divisions",
  },
  {
    id: "2",
    name: "Bengal Tigers",
  },
  {
    id: "3",
    name: "Bengal Tigers 2",
  },
];

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  // Schedule view state
  const [activeView, setActiveView] = useState<string>("list");
  const [selectedTeamId, setSelectedTeam] = useState<string>("1");
  const [selectedYear, setSelectedYear] = useState<number>(currentYear);
  const handleViewChange = (view: string) => setActiveView(view);

  const handleTeamChange = (teamId: string) => {
    setSelectedTeam(teamId);
  };
  const handleYearChange = (year: number) => {
    setSelectedYear(year);
  };

  return (
    <AppContext.Provider
      value={{
        activeView,
        handleViewChange,
        selectedTeamId,
        handleTeamChange,
        selectedYear,
        handleYearChange,
        teams,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
