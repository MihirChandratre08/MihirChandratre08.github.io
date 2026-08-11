import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const ResearchModeContext = createContext({
  enabled: false,
  toggle: () => {},
})

const STORAGE_KEY = 'mihir-research-mode'

export function ResearchModeProvider({ children }) {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'on') setEnabled(true)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.researchMode = enabled ? 'on' : 'off'
    window.localStorage.setItem(STORAGE_KEY, enabled ? 'on' : 'off')
  }, [enabled])

  const value = useMemo(
    () => ({
      enabled,
      toggle: () => setEnabled((current) => !current),
    }),
    [enabled],
  )

  return <ResearchModeContext.Provider value={value}>{children}</ResearchModeContext.Provider>
}

export function useResearchMode() {
  return useContext(ResearchModeContext)
}
