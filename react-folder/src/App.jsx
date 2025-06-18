import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './css/App.css'
import FirstYearEngineering from './pages/FirstYearEngineering'

function App() {

  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/First-Year Common Engineering" element={<FirstYearEngineering />}/>
      </Routes>
    </main>
  )
}

export default App
