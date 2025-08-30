import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './css/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/Movie-App/"> 
    <App />
    </BrowserRouter>
  </StrictMode>,
)
//line 9 is updated
 // to route the pages i first installed a react router then impoerted it and then wrapped the App component in my import