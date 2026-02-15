export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          🗺️ TZ Tourism
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Explore Tanzania with GPS-accurate attraction data, real-time weather, and seasonal planning guides.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">📍 Attractions</h2>
            <p className="text-gray-600">
              Browse GPS-accurate locations of Tanzania's top tourist destinations.
            </p>
          </div>
          
          <div className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">🌤️ Weather</h2>
            <p className="text-gray-600">
              Real-time weather data for each attraction location.
            </p>
          </div>
          
          <div className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">📊 Seasonal Info</h2>
            <p className="text-gray-600">
              Historical weather patterns for better trip planning.
            </p>
          </div>
          
          <div className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">⛰️ Difficulty Ratings</h2>
            <p className="text-gray-600">
              Honest difficulty ratings based on altitude and terrain.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
