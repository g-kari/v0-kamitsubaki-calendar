import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">イベントが見つかりません</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-gray-600">指定されたイベントは存在しないか、削除された可能性があります。</p>
          <Button asChild>
            <Link href="/">ホームに戻る</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
