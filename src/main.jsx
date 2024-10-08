/* import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' */
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  
)
/* createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
) */
