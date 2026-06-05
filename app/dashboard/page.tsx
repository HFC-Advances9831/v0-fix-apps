import { Redis } from '@upstash/redis';

// Initialize the database connection
const redis = Redis.fromEnv();

export default async function DashboardPage() {
  // Fetch real-time count from Redis
  // We use "0" as a fallback if the key doesn't exist yet
  const game2048Count = await redis.get('game:2048:clicks') || 0;

  return (
    <main className="max-w-7xl mx-auto px-6 pt-24 pb-8">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-12 gradient-text">
        NETWORK ANALYTICS
      </h1>
      
      <div className="grid grid-cols-1 gap-6 max-w-sm mx-auto">
        {/* Real-time Data Card */}
        <div className="bg-card rounded-3xl border border-border p-12 text-center shadow-lg">
          <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
            2048 Plays (Live)
          </span>
          <h2 className="text-6xl font-black mt-4">
            {game2048Count.toString()}
          </h2>
        </div>
      </div>
    </main>
  );
}
