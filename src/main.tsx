import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThirdwebProvider } from '@thirdweb-dev/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThirdwebProvider activeChain="ethereum">
      <App />
    </ThirdwebProvider>
  </StrictMode>,
)
