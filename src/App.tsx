import { Routes, Route, Navigate } from 'react-router-dom'
import CaptureIntroPage from './pages/CaptureIntroPage'
import CapturePage from './pages/CapturePage'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/capture-intro" replace />} />
        <Route path="/capture-intro" element={<CaptureIntroPage />} />
        <Route path="/capture" element={<CapturePage />} />
      </Routes>
    </div>
  )
}

export default App
