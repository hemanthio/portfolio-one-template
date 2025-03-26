import ToggleButton from "../components/ThemeToggle"; 

import React from 'react'

const ThemeToggle = () => {
  return (
    <div className="w-full aspect-square rounded-[18px] bg-white dark:bg-black flex items-center justify-center">
        <ToggleButton />
    </div>
  )
}

export default ThemeToggle