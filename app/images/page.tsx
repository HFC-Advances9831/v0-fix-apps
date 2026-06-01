import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Images - The Carey Network",
  description: "Image gallery",
}

export default function ImagesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-24 pb-8">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 gradient-text">
        IMAGES
      </h1>
      
      <div className="bg-card rounded-3xl border border-border p-12 text-center max-w-xl mx-auto">
        <span className="text-6xl mb-6 block">🖼️</span>
        <h2 className="text-xl font-bold text-foreground mb-2">Coming Soon</h2>
        <p className="text-muted-foreground">
          Image gallery and media storage will be available here.
        </p>
      </div>
    </main>
  )
}
