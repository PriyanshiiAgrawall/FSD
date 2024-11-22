import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Marks from './Marks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App name={'Dhruv Singh'} email={'dhruv@google.com'} mob={987678} />
    <Marks m1={98} m2={45} m3={85} />
    <Marks m1={67} m2={84} m3={69} />
  </StrictMode>,
)
