import QueryClientWrapper from "@modules/providers"
import { Metadata } from "next"
import NextTopLoader from "nextjs-toploader"
import "styles/globals.css"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
      <NextTopLoader
            color="#98b07c"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          />
        <QueryClientWrapper>
        <main className="relative">{props.children}</main>
        </QueryClientWrapper>
      </body>
    </html>
  )
}
