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
  Table,
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
import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";

// Sample data - replace with your actual data
const years = [2025, 2024];

// Navigation items with proper typing
type NavItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  { id: "list", label: "List", icon: <Table className="h-4 w-4 mr-2" /> },
  {
    id: "calendar",
    label: "Calendar",
    icon: <Calendar className="h-4 w-4 mr-2" />,
  },
  { id: "home", label: "Home", icon: <Home className="h-4 w-4 mr-2" /> },
  { id: "away", label: "Away", icon: <MapPin className="h-4 w-4 mr-2" /> },
];

type props = {
  hideTeamSelection?: boolean;
};
export function CricketNav({ hideTeamSelection }: props) {
  const {
    activeView,
    handleViewChange,
    selectedTeamId,
    selectedYear,
    handleTeamChange,
    handleYearChange,
  } = useAppContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const handleNavClick = (viewId: string) => {
    handleViewChange(viewId);
    setMobileMenuOpen(false);
  };

  return (
    <div>
      <div className="flex h-16 items-center justify-between px-4 shadow-md bg-white fixed top-0 left-0 right-0 z-10">
        <div className="flex items-center">
          <Button onClick={() => handleNavClick("list")} variant="ghost">
            <Link href="/" className="flex items-center">
              <Image src="/bt-logo.png" alt="Logo" width={80} height={80} />
            </Link>
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex ml-10 space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={activeView === item.id ? "default" : "ghost"}
              className={cn(
                "flex items-center",
                activeView === item.id ? "bg-primary" : "",
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
                  <span>Bengal Tigers Club</span>
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
                <div className="mt-4 pt-4">
                  <p className="text-sm font-medium mb-2">Select Team</p>
                  <div className="flex flex-col gap-2">
                    <Button
                      variant="outline"
                      className={cn(selectedTeamId === "1" && "bg-muted")}
                      onClick={() => handleTeamChange("1")}
                    >
                      <Users className="h-4 w-4 mr-2" />
                      Both Divisions
                    </Button>
                    <Button
                      variant="outline"
                      className={cn(selectedTeamId === "2" && "bg-muted")}
                      onClick={() => handleTeamChange("2")}
                    >
                      <Users className="h-4 w-4 mr-2" />
                      Bengal Tigers
                    </Button>
                    <Button
                      variant="outline"
                      className={cn(selectedTeamId === "3" && "bg-muted")}
                      onClick={() => handleTeamChange("3")}
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

        <div className="flex items-center space-x-4">
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
                  onClick={() => handleYearChange(year)}
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
      {!hideTeamSelection && (
        <div className="hidden md:flex mt-16 px-4 py-2 justify-center ">
          <ToggleGroup
            type="single"
            value={selectedTeamId}
            className="shadow p-2 rounded-md"
            onValueChange={(value) => value && handleTeamChange(value)}
          >
            <ToggleGroupItem
              value="1"
              className="text-xs sm:text-sm data-[state=on]:bg-primary data-[state=on]:text-white"
            >
              <Users className="h-4 w-4 mr-1 sm:mr-2" />
              <span>All Teams</span>
            </ToggleGroupItem>
            <ToggleGroupItem
              value="2"
              className="text-xs sm:text-sm data-[state=on]:bg-primary data-[state=on]:text-white"
            >
              <Users className="h-4 w-4 mr-1 sm:mr-2" />
              <span>Bengal Tigers</span>
            </ToggleGroupItem>
            <ToggleGroupItem
              value="3"
              className="text-xs sm:text-sm data-[state=on]:bg-primary data-[state=on]:text-white"
            >
              <Users className="h-4 w-4 mr-1 sm:mr-2" />
              <span>Bengal Tigers 2</span>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      )}
    </div>
  );
}
