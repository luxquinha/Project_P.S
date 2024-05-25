import { RequestProvider } from "./Request/RequestProvider"
import { ThemeProvider } from "./Theme/ThemeProvider"

export const AppProvider = ({children}) =>{
    return(
        <RequestProvider>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </RequestProvider>
    )
}