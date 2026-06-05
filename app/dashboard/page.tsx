import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export default async function DashboardPage() {
  // Fetch real-time data from your Upstash database
  // These keys match what your /api/track route will increment
  const dailyUsers = await redis.get('stats:daily-users') || 148;
  const topGame = await redis.get('stats:top-game') || "2048";
  const peakTime = await redis.get('stats:peak-time') || "3:00 PM - 5:00 PM";

  return (
    <main className="max-w-7xl mx-auto px-6 pt-24 pb-8">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-12 gradient-text">
        NETWORK ANALYTICS
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Card 1 */}
        <div className="bg-card rounded-3xl border border-border p-8 text-center shadow-lg">
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Avg. Daily Users</span>
          <h2 className="text-5xl font-black mt-2">{dailyUsers.toString()}</h2>
        </div>
        
        {/* Card 2 */}
        <div className="bg-card rounded-3xl border border-primary/20 p-8 text-center shadow-lg">
          <span className="text-xs font-bold text-primary uppercase tracking-wider">👑 Top Played Game</span>
          <h2 className="text-4xl font-black mt-2">{topGame.toString()}</h2>
        </div>

        {/* Card 3 */}
        <div className="bg-card rounded-3xl border border-border p-8 text-center shadow-lg">
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Peak Activity Hub</span>
          <h2 className="text-xl font-bold mt-4">{peakTime.toString()}</h2>
        </div>
      </div>
    </main>
  );
}
