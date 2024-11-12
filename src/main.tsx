import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FiltersProvider } from "./context/filters.tsx";
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </StrictMode>
)
