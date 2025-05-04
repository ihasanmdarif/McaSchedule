"use client";

import type React from "react";

import { useState } from "react";
import {
  ChevronDown,
  Calendar,
  Home,
  MapPin,
  Trophy,
  Users,
  List,
  Menu,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Sample data - replace with your actual data
const years = [2025, 2024, 2023, 2022, 2021, 2020];
const currentYear = 2025;

// Navigation items with proper typing
type NavItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  {
    id: "calendar",
    label: "Calendar",
    icon: <Calendar className="h-4 w-4 mr-2" />,
  },
  { id: "list", label: "List", icon: <List className="h-4 w-4 mr-2" /> },
  {
    id: "upcoming",
    label: "Upcoming",
    icon: <Trophy className="h-4 w-4 mr-2" />,
  },
  { id: "home", label: "Home", icon: <Home className="h-4 w-4 mr-2" /> },
  { id: "away", label: "Away", icon: <MapPin className="h-4 w-4 mr-2" /> },
];

interface CricketNavProps {
  onViewChange?: (view: string) => void;
}

export function CricketNav({ onViewChange = () => {} }: CricketNavProps) {
  const [selectedYear, setSelectedYear] = useState<number>(currentYear);
  const [selectedTeam, setSelectedTeam] = useState<string>("all");
  const [activeView, setActiveView] = useState<string>("calendar");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const handleNavClick = (viewId: string) => {
    setActiveView(viewId);
    onViewChange(viewId);
    setMobileMenuOpen(false);
  };

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center gap-2 font-bold text-xl text-green-700">
          <Trophy className="h-6 w-6" />
          <span className="hidden md:inline">Bengla Tigers Club</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex ml-10 space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={activeView === item.id ? "default" : "ghost"}
              className={cn(
                "flex items-center",
                activeView === item.id
                  ? "bg-green-100 text-green-800 hover:bg-green-200"
                  : "",
              )}
              onClick={() => handleNavClick(item.id)}
            >
              {item.icon}
              {item.label}
            </Button>
          ))}
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden ml-auto">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-4 py-4">
                <div className="flex items-center gap-2 font-bold text-xl text-green-700 mb-4">
                  <Trophy className="h-6 w-6" />
                  <span>Bengla Tigers Club</span>
                </div>
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    variant={activeView === item.id ? "default" : "ghost"}
                    className={cn(
                      "justify-start",
                      activeView === item.id
                        ? "bg-green-100 text-green-800 hover:bg-green-200"
                        : "",
                    )}
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.icon}
                    {item.label}
                  </Button>
                ))}
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm font-medium mb-2">Select Team</p>
                  <div className="flex flex-col gap-2">
                    <Button
                      variant="outline"
                      className={cn(selectedTeam === "all" && "bg-muted")}
                      onClick={() => setSelectedTeam("all")}
                    >
                      <Users className="h-4 w-4 mr-2" />
                      All Teams
                    </Button>
                    <Button
                      variant="outline"
                      className={cn(
                        selectedTeam === "bengla-tigers" && "bg-muted",
                      )}
                      onClick={() => setSelectedTeam("bengla-tigers")}
                    >
                      <Users className="h-4 w-4 mr-2" />
                      Bengla Tigers
                    </Button>
                    <Button
                      variant="outline"
                      className={cn(
                        selectedTeam === "bengal-tigers-2" && "bg-muted",
                      )}
                      onClick={() => setSelectedTeam("bengal-tigers-2")}
                    >
                      <Users className="h-4 w-4 mr-2" />
                      Bengal Tigers 2
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="mr-auto flex items-center space-x-4">
          <div className="hidden md:flex">
            <Input
              placeholder="Search matches..."
              className="w-[200px] mr-2"
              type="search"
            />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-[130px]">
                {selectedYear}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {years.map((year) => (
                <DropdownMenuItem
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={cn(
                    "cursor-pointer",
                    selectedYear === year && "font-bold bg-green-50",
                  )}
                >
                  {year}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Team Selection - Desktop Only */}
      <div className="hidden md:block border-t px-4 py-2">
        <ToggleGroup
          type="single"
          value={selectedTeam}
          onValueChange={(value) => value && setSelectedTeam(value)}
        >
          <ToggleGroupItem value="all" className="text-xs sm:text-sm">
            <Users className="h-4 w-4 mr-1 sm:mr-2" />
            <span>All Teams</span>
          </ToggleGroupItem>
          <ToggleGroupItem value="bengla-tigers" className="text-xs sm:text-sm">
            <Users className="h-4 w-4 mr-1 sm:mr-2" />
            <span>Bengla Tigers</span>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="bengal-tigers-2"
            className="text-xs sm:text-sm"
          >
            <Users className="h-4 w-4 mr-1 sm:mr-2" />
            <span>Bengal Tigers 2</span>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
}
