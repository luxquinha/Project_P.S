import { Moon, Sun } from 'lucide-react'
import React from 'react'
import useThemeContext from '../../hooks/useTheme'
import { InputText } from '../InputText/index'
import { twMerge } from 'tailwind-merge'


const NavbarToggleTheme = (className, actionStyle, iconSize) => {
  const {theme, handleToggleTheme} = useThemeContext()

  return (
    <InputText.Root className={twMerge('lg:col-span-1 lg:col-end-7 lg:justify-self-end lg:p-4',className)}>
        <InputText.Action icon={theme==='theme-light' ? <Sun size={iconSize}/> :(theme==='theme-dark' && <Moon size={iconSize}/>)}
        className={twMerge('text-skin-icon-secondary w-auto h-auto p-1 hover:scale-105 hover:text-skin-icon-secondary-hover lg:scale-110 lg:hover:scale-[1.3]', actionStyle)}
        action={handleToggleTheme}
        />
    </InputText.Root>
  )
}
export default NavbarToggleTheme