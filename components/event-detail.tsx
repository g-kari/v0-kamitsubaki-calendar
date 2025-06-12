"use client"

import { ArrowLeft, Calendar, MapPin, JapaneseYenIcon as Yen, ExternalLink, Ticket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import type { Event } from "@/lib/events"
import { useRouter } from "next/navigation"
import Image from "next/image"

interface EventDetailProps {
  event: Event
}

export function EventDetail({ event }: EventDetailProps) {
  const router = useRouter()

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

  const formatDateRange = () => {
    if (event.endDate) {
      return `${event.startDate} 〜 ${event.endDate}`
    }
    return event.startDate
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-black text-white p-4">
        <div className="container mx-auto">
          <Button variant="ghost" className="text-white hover:bg-gray-800 mb-4" onClick={() => router.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            戻る
          </Button>
          <div className="flex items-center justify-between">
            <div>
              <Badge className={`mb-2 ${getCategoryColor(event.category)}`}>{event.category}</Badge>
              <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
              <p className="text-gray-300">{event.organizer}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                  <Image
                    src={event.images[0] || "/placeholder.svg"}
                    alt={event.title}
                    width={600}
                    height={400}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-4">イベント概要</h2>
                <p className="text-gray-700 leading-relaxed mb-6">{event.description}</p>

                <h3 className="text-xl font-bold mb-4">詳細情報</h3>
                <ul className="space-y-2">
                  {event.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {event.images.length > 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>ギャラリー</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {event.images.slice(1).map((image, index) => (
                      <div key={index} className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${event.title} - 画像 ${index + 2}`}
                          width={400}
                          height={300}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>開催情報</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-semibold">開催期間</p>
                    <p className="text-gray-600">{formatDateRange()}</p>
                  </div>
                </div>

                {event.location && (
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-semibold">会場</p>
                      <p className="text-gray-600">{event.location}</p>
                    </div>
                  </div>
                )}

                {event.price && (
                  <div className="flex items-start space-x-3">
                    <Yen className="h-5 w-5 text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-semibold">料金</p>
                      <p className="text-gray-600">{event.price}</p>
                    </div>
                  </div>
                )}

                <Separator />

                <div className="space-y-3">
                  {event.ticketUrl && (
                    <Button className="w-full" asChild>
                      <a href={event.ticketUrl} target="_blank" rel="noopener noreferrer">
                        <Ticket className="mr-2 h-4 w-4" />
                        チケット購入
                      </a>
                    </Button>
                  )}

                  {event.officialUrl && (
                    <Button variant="outline" className="w-full" asChild>
                      <a href={event.officialUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        公式サイト
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>主催者情報</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">{event.organizer}</p>
                <p className="text-sm text-gray-600 mt-2">
                  神椿市建設中プロジェクトの一環として開催されるイベントです。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
