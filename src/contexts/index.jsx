import { ThemeProvider } from "./Theme/ThemeProvider"

export const AppProvider = ({children}) =>{
    return(
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}