import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { events } from "@/lib/events"

export function EventList() {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "EVENT":
        return "bg-pink-100 text-pink-800"
      case "LIVE":
        return "bg-blue-100 text-blue-800"
      case "MOVIE":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-6xl font-bold mb-4">EVENT INFORMATION</h2>
        <p className="text-gray-600">
          KAMITSUBAKI CITY UNDER CONSTRUCTION & VIRTUAL WITCH PHENOMENON EVENT INFORMATION
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {events.map((event) => (
          <Link key={event.id} href={`/events/${event.id}`}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="flex">
                  <div className="bg-black text-white p-4 flex flex-col items-center justify-center min-w-[120px]">
                    <div className="text-xs mb-2">2025</div>
                    <div className="text-2xl font-bold">
                      {event.startDate.split("-")[2]}.{event.startDate.split("-")[1]}
                    </div>
                    {event.endDate && (
                      <>
                        <div className="text-xs my-1">↓</div>
                        <div className="text-2xl font-bold">
                          {event.endDate.split("-")[2]}.{event.endDate.split("-")[1]}
                        </div>
                      </>
                    )}
                    <div className="text-xs mt-2 writing-mode-vertical-rl text-orientation-mixed">
                      KAMITSUBAKI STUDIO
                    </div>
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex justify-between items-start mb-2">
                      <Badge className={getCategoryColor(event.category)}>{event.category}</Badge>
                    </div>
                    <h3 className="font-bold text-lg mb-3 leading-tight">{event.title}</h3>
                    <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500 text-sm">イベント画像</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
