import { useContext } from "react"
import { ThemeContext } from "../contexts/Theme/ThemeContext.js"


export default function useThemeContext(){
    const context = useContext(ThemeContext)

    if(context === undefined){
        throw new Error('Não está dentro do contexto')
    }
    return context
}