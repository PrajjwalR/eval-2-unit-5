import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { DataProvider } from './Context/DataStore.jsx'
import { LoginProvider } from './Context/Loginauth.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <LoginProvider>
    <DataProvider>
    <App />
    </DataProvider>
    </LoginProvider>
    </BrowserRouter>
  </StrictMode>
)
