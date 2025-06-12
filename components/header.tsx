export function Header() {
  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-sm">神椿</span>
          </div>
          <div>
            <h1 className="text-xl font-bold">神椿市建設中。</h1>
            <p className="text-sm text-gray-300">KAMITSUBAKI CITY UNDER CONSTRUCTION</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold">W×W</div>
          <div className="text-xs">Virtual Witch Phenomenon</div>
        </div>
      </div>
    </header>
  )
}
