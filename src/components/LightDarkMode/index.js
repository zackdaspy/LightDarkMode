import {useState} from 'react'
import './index.css'

const LightDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`light-dark-mode ${isDarkMode ? 'dark-mode' : ''}`}>
      <button onClick={toggleMode} type="button">
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  )
}

export default LightDarkMode
