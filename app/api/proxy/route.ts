import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url")

  if (!url) {
    return NextResponse.json({ error: "URL parameter is required" }, { status: 400 })
  }

  try {
    // Decode the URL
    const targetUrl = decodeURIComponent(url)

    // Fetch the content from the target URL
    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
      },
    })

    const contentType = response.headers.get("content-type") || "text/html"

    // For HTML content, we need to rewrite URLs to go through our proxy
    if (contentType.includes("text/html")) {
      let html = await response.text()

      // Get the base URL for resolving relative paths
      const baseUrl = new URL(targetUrl)
      const origin = baseUrl.origin

      // Rewrite relative URLs to absolute URLs through our proxy
      // Handle src attributes
      html = html.replace(/(src=["'])((?!data:|blob:|javascript:|https?:\/\/|\/\/))/gi, `$1${origin}/`)
      html = html.replace(/(src=["'])(\/(?!\/))/gi, `$1${origin}$2`)

      // Handle href attributes for stylesheets and links
      html = html.replace(/(href=["'])((?!data:|blob:|javascript:|https?:\/\/|\/\/|#))/gi, `$1${origin}/`)
      html = html.replace(/(href=["'])(\/(?!\/))/gi, `$1${origin}$2`)

      // Handle url() in inline styles
      html = html.replace(/url\(["']?((?!data:|blob:|https?:\/\/))/gi, `url(${origin}/`)

      // Inject a base tag to help with remaining relative URLs
      if (!html.includes("<base")) {
        html = html.replace(/<head>/i, `<head><base href="${origin}/">`)
      }

      return new NextResponse(html, {
        headers: {
          "Content-Type": "text/html",
          "Access-Control-Allow-Origin": "*",
        },
      })
    }

    // For other content types (JS, CSS, images), pass through
    const data = await response.arrayBuffer()

    return new NextResponse(data, {
      headers: {
        "Content-Type": contentType,
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=3600",
      },
    })
  } catch (error) {
    console.error("Proxy error:", error)
    return NextResponse.json({ error: "Failed to fetch content" }, { status: 500 })
  }
}
