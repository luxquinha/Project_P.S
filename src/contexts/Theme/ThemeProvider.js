import { useState } from "react"
import { ThemeContext } from "./ThemeContext"



export const ThemeProvider = ({children}) =>{
    const [theme, setTheme] = useState('theme-light')
    const [show, setShow] = useState(false)
    const [current, setCurrent] = useState(0)
    const slides = [
        'https://img.freepik.com/fotos-gratis/respingo-colorido-abstrato-3d-background-generativo-ai-background_60438-2509.jpg',
        'https://services.meteored.com/img/article/inteligencia-artificial-aprende-a-reconstruir-imagens-vistas-por-pessoas-ciencia-fotos-1679175318563_1280.jpg',
        'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/6192/live/61bb3530-f641-11ee-91c5-c92e09ae6ba7.jpg',
        'https://cdn.pixabay.com/photo/2014/05/05/14/14/meadow-338211_1280.jpg'
      ]

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

    const prev = () =>{
        setCurrent((prevState)=> current===0 ? (slides.length-1): (current-1))
    }
    const next = () =>{
        setCurrent((nextState)=> current===(slides.length-1) ? 0 : (current+1))
    }

    return(
        <ThemeContext.Provider value={{ handleHoverAction, show, setShow, theme, handleToggleTheme, slides, current, setCurrent, prev, next}}>
            {children}
        </ThemeContext.Provider>
    )
}