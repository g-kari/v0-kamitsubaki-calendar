export interface Event {
  id: number
  title: string
  startDate: string
  endDate?: string
  time?: string
  category: "EVENT" | "LIVE" | "MOVIE"
  color: string
  description: string
  location?: string
  price?: string
  organizer: string
  images: string[]
  details: string[]
  ticketUrl?: string
  officialUrl?: string
}

export const events: Event[] = [
  {
    id: 1,
    title: "神椿市復興調査大賞",
    startDate: "2025-04-30",
    endDate: "2025-06-15",
    time: "4/30-6/15",
    category: "EVENT",
    color: "bg-pink-200",
    description:
      "神椿市の復興に関する調査結果を発表する大規模なイベントです。市民の皆様の復興への取り組みを表彰いたします。",
    location: "神椿市文化会館",
    price: "無料",
    organizer: "神椿市役所",
    images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=300&width=400"],
    details: ["復興調査結果の発表", "市民表彰式", "復興計画の説明会", "質疑応答セッション"],
    officialUrl: "https://kamitsubaki-city.jp/reconstruction",
  },
  {
    id: 2,
    title: "KAMITSUBAKI WARS 2025 神椿後楽園戦線",
    startDate: "2025-06-13",
    endDate: "2025-06-14",
    time: "6/13-6/14",
    category: "LIVE",
    color: "bg-red-200",
    description: "神椿市最大のライブイベント！2日間にわたって開催される音楽の祭典です。",
    location: "神椿後楽園アリーナ",
    price: "一般: ¥8,000 / 学生: ¥6,000",
    organizer: "KAMITSUBAKI STUDIO",
    images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=300&width=400"],
    details: ["DAY1: オープニングライブ", "DAY2: メインライブ", "特別ゲスト出演", "限定グッズ販売"],
    ticketUrl: "https://tickets.kamitsubaki.jp/wars2025",
    officialUrl: "https://kamitsubaki.jp/wars2025",
  },
  {
    id: 3,
    title: "V.W.P POP UP SHOP in SHIBUYA TSUTAYA",
    startDate: "2025-05-23",
    endDate: "2025-06-26",
    time: "5/23-6/26",
    category: "EVENT",
    color: "bg-purple-200",
    description: "渋谷TSUTAYAでのポップアップショップ開催！限定グッズや先行販売アイテムをお見逃しなく。",
    location: "SHIBUYA TSUTAYA 7F イベントスペース",
    price: "入場無料",
    organizer: "V.W.P × TSUTAYA",
    images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=300&width=400"],
    details: ["限定グッズ販売", "先行販売アイテム", "フォトスポット設置", "来場特典プレゼント"],
    officialUrl: "https://vwp.kamitsubaki.jp/popup-shibuya",
  },
  {
    id: 4,
    title: "TVアニメ「神椿市建設中。」RAKU SPA 極楽湯コラボ",
    startDate: "2025-06-19",
    endDate: "2025-07-15",
    time: "6/19-7/15",
    category: "EVENT",
    color: "bg-green-200",
    description: "極楽湯とのコラボレーションイベント！アニメの世界観を楽しみながらリラックスできます。",
    location: "極楽湯 各店舗",
    price: "入浴料 + コラボ料金 ¥500",
    organizer: "極楽湯 × KAMITSUBAKI STUDIO",
    images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=300&width=400"],
    details: ["コラボ入浴剤プレゼント", "限定タオル販売", "キャラクターパネル展示", "スタンプラリー開催"],
    officialUrl: "https://rakuspa.jp/kamitsubaki-collab",
  },
  {
    id: 5,
    title: "TVアニメ「神椿市建設中。」劇場先行版「魔女の娘-Witchling-」上映開始",
    startDate: "2025-06-13",
    time: "6/13",
    category: "MOVIE",
    color: "bg-blue-200",
    description: "待望の劇場版がついに上映開始！TVシリーズでは描かれなかった新たなストーリーをお楽しみください。",
    location: "全国の映画館",
    price: "一般: ¥1,800 / 学生: ¥1,500",
    organizer: "KAMITSUBAKI STUDIO",
    images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=300&width=400"],
    details: ["完全新作ストーリー", "豪華声優陣による吹き替え", "劇場限定グッズ販売", "舞台挨拶イベント開催予定"],
    ticketUrl: "https://movie-tickets.jp/witchling",
    officialUrl: "https://witchling-movie.jp",
  },
]

export function getEventById(id: number): Event | undefined {
  return events.find((event) => event.id === id)
}

export function getEventsByCategory(category: string): Event[] {
  return events.filter((event) => event.category === category)
}
