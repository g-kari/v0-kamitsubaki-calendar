"use client"

import { useState } from "react"
import { Calendar } from "@/components/calendar"
import { EventList } from "@/components/event-list"
import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  const [currentView, setCurrentView] = useState<"calendar" | "events">("calendar")

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Navigation currentView={currentView} onViewChange={setCurrentView} />
      <main className="container mx-auto px-4 py-8">{currentView === "calendar" ? <Calendar /> : <EventList />}</main>
    </div>
  )
}
