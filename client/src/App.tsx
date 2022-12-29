import { useState } from 'react'
import { useDarkMode } from './hooks/ThemeContext.jsx'
import Header from './components/header/Header.jsx'
import Home from './components/main/Home.jsx'
import Footer from './components/footer/Footer.jsx'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <useDarkMode.Provider value={[darkMode, setDarkMode]}>
      <div id="root" data-theme={darkMode ? "dark" : null}>
        <Header />
        <Home />
{/*         <Footer /> */}
      </div>
    </useDarkMode.Provider>
  )
}

export default App
