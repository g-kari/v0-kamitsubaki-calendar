"use client"

import { Button } from "@/components/ui/button"

interface NavigationProps {
  currentView: "calendar" | "events"
  onViewChange: (view: "calendar" | "events") => void
}

export function Navigation({ currentView, onViewChange }: NavigationProps) {
  return (
    <nav className="bg-white border-b border-gray-200 p-4">
      <div className="container mx-auto flex space-x-4">
        <Button variant={currentView === "calendar" ? "default" : "outline"} onClick={() => onViewChange("calendar")}>
          カレンダー
        </Button>
        <Button variant={currentView === "events" ? "default" : "outline"} onClick={() => onViewChange("events")}>
          イベント情報
        </Button>
      </div>
    </nav>
  )
}
