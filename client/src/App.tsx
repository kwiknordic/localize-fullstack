import { useState } from 'react'
import { useDarkMode } from './hooks/ThemeContext.jsx'
import Header from './components/header/Header.jsx'
import Home from './pages/Home.jsx'

function App() {
  const [darkMode, setDarkMode] = useState(Boolean(JSON.parse(localStorage.getItem("darkMode"))) ?? false)

  return (
    <useDarkMode.Provider value={[darkMode, setDarkMode]}>
      <div id="root" data-theme={darkMode ? "dark" : null}>
        <Header />
        <Home />
      </div>
    </useDarkMode.Provider>
  )
}

export default App
