import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NextUIProvider } from "@nextui-org/system";
import App from './App.tsx'
import './index.css';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './utils/QueryClient.ts';
import { AppContextProvider } from './context/AppContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </AppContextProvider>
    </QueryClientProvider>
  </StrictMode>,
)
