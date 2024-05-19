import { useState } from "react"
import { ThemeContext } from "./ThemeContext"


export const ThemeProvider = ({children}) =>{
    const [searchValue, setSearchValue] = useState('')
    const [show, setShow] = useState(false)

    const handleHoverAction = () => {
        setShow(true)
    }
    
    const handleCleanSearch = () =>{
        setSearchValue('')
    }

    return(
        <ThemeContext.Provider value={{ handleHoverAction, show, setShow, handleCleanSearch, searchValue, setSearchValue}}>
            {children}
        </ThemeContext.Provider>
    )
}