import { notFound } from "next/navigation"
import { getEventById } from "@/lib/events"
import { EventDetail } from "@/components/event-detail"

interface EventPageProps {
  params: {
    id: string
  }
}

export default function EventPage({ params }: EventPageProps) {
  const eventId = Number.parseInt(params.id)
  const event = getEventById(eventId)

  if (!event) {
    notFound()
  }

  return <EventDetail event={event} />
}
