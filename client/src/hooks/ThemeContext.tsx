import { createContext } from 'react';
export const useDarkMode = createContext();

/* export function ThemeProvider({children}) {
  const [darkMode, setDarkMode] = useState(false)
  
  return (
    <useDarkMode.Provider value={[darkMode, setDarkMode]}>
      {children}
    </useDarkMode.Provider>
  )
} */