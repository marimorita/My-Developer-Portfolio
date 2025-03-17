import { StateProvider } from './components/Context/Context.jsx'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StateProvider>
    <App/>
  </StateProvider>,
)