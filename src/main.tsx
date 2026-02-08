import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { NuqsAdapter } from "nuqs/adapters/react-router/v7"
import { ChakraProvider } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import App from "./App.tsx"
import { system } from "./styles/chakraTheme"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      gcTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
})

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <NuqsAdapter>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider value={system}>
            <App />
          </ChakraProvider>
        </QueryClientProvider>
      </NuqsAdapter>
    </BrowserRouter>
  </StrictMode>,
)