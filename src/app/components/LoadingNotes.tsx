export default function LoadingNotes() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Recent Notes</h2>
      {[1, 2, 3].map((i) => (
        <div key={i} className="animate-pulse">
          <div className="h-32 bg-gray-200 rounded-lg"></div>
        </div>
      ))}
    </div>
  )
} 