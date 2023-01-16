import { useState } from 'react'
import { useDarkMode } from './hooks/ThemeContext.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Header from './components/header/Header.jsx'
import Home from './pages/Home.jsx'

const queryClient = new QueryClient()

function App() {
  const [darkMode, setDarkMode] = useState(Boolean(JSON.parse(localStorage.getItem("darkMode"))) ?? false)

  return (
    <QueryClientProvider client={queryClient}>
      <useDarkMode.Provider value={[darkMode, setDarkMode]}>
        <div id="root" data-theme={darkMode ? "dark" : null}>
          <Header />
          <Home />
        </div>
      </useDarkMode.Provider>
    </QueryClientProvider>
  )
}

export default App
