"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { events } from "@/lib/events"

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 5, 1)) // June 2025

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()
  const monthNames = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
  const dayNames = ["月", "火", "水", "木", "金", "土", "日"]

  const getEventsForDate = (date: number) => {
    const dateString = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(date).padStart(2, "0")}`
    return events.filter((event) => event.date === dateString)
  }

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-6xl font-bold">CALENDAR</h2>
          <div className="text-right">
            <div className="text-4xl font-bold">{currentDate.getFullYear()}</div>
            <div className="text-2xl">{monthNames[currentDate.getMonth()]}</div>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon" onClick={() => navigateMonth("prev")}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => navigateMonth("next")}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-7 gap-1 mb-4">
            {dayNames.map((day) => (
              <div key={day} className="p-2 text-center font-semibold text-gray-600">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: firstDayOfMonth }, (_, i) => (
              <div key={`empty-${i}`} className="h-24 p-1"></div>
            ))}

            {Array.from({ length: daysInMonth }, (_, i) => {
              const date = i + 1
              const dayEvents = getEventsForDate(date)

              return (
                <div key={date} className="h-24 p-1 border border-gray-200 hover:bg-gray-50">
                  <div className="font-semibold text-sm mb-1">{String(date).padStart(2, "0")}</div>
                  <div className="space-y-1">
                    {dayEvents.map((event) => (
                      <Link key={event.id} href={`/events/${event.id}`}>
                        <Badge
                          variant="secondary"
                          className={`text-xs p-1 ${event.color} truncate block hover:opacity-80 cursor-pointer`}
                        >
                          {event.title}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-4">
            <h3 className="font-bold text-lg mb-3 flex items-center">
              <span className="w-6 h-6 bg-pink-500 rounded-full mr-2"></span>
              EVENT
            </h3>
            <div className="space-y-2 text-sm">
              <div>4/30-6/15 神椿市復興調査大賞</div>
              <div>5/23-6/26 V.W.P POP UP SHOP in SHIBUYA TSUTAYA</div>
              <div>5/30-7/26 TVアニメ「神椿市建設中。」きゃらドリルコラボ</div>
              <div>6/19-7/15 TVアニメ「神椿市建設中。」RAKU SPA 極楽湯コラボ</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h3 className="font-bold text-lg mb-3 flex items-center">
              <span className="w-6 h-6 bg-blue-500 rounded-full mr-2"></span>
              LIVE
            </h3>
            <div className="space-y-2 text-sm">
              <div>6/13-6/14 KAMITSUBAKI WARS 2025 神椿後楽園戦線</div>
              <div>6/19 EXPO 2025 Virtual Osaka Healthcare Pavilion</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h3 className="font-bold text-lg mb-3 flex items-center">
              <span className="w-6 h-6 bg-purple-500 rounded-full mr-2"></span>
              MOVIE
            </h3>
            <div className="space-y-2 text-sm">
              <div>6/13 TVアニメ「神椿市建設中。」劇場先行版</div>
              <div>6/15 「魔女の娘-Witchling-」上映開始</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
