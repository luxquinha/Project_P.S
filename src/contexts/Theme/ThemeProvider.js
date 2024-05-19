import { useState } from "react"
import { ThemeContext } from "./ThemeContext"


export const ThemeProvider = ({children}) =>{
    const [theme, setTheme] = useState('theme-light')
    const [show, setShow] = useState(false)

    const handleHoverAction = () => {
        setShow(true)
    }

    const handleToggleTheme = () => {
        if(theme === 'theme-dark'){
            setTheme('theme-light')
        }else if(theme === 'theme-light'){
            setTheme('theme-dark')
        }
    }

    return(
        <ThemeContext.Provider value={{ handleHoverAction, show, setShow, theme, handleToggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}