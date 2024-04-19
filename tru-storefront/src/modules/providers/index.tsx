"use client"

import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { MedusaProvider } from "medusa-react"
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from "react"

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
        baseUrl="http://localhost:9000"
      >
        {children}
      </MedusaProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} position="bottom" /> */}
    </QueryClientProvider>
  )
}
