"use client"

import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { MedusaProvider } from "medusa-react"
import { useState } from "react"

const BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000"

export default function QueryClientWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <MedusaProvider
        queryClientProviderProps={{ client: queryClient }}
        baseUrl={BACKEND_URL}
      >
        {children}
      </MedusaProvider>
    </QueryClientProvider>
  )
}
