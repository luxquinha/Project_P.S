import { useState } from "react"
import { RequestContext } from "./RequestContext"

export const RequestProvider = ({children}) => {
    const [news, setNews] = useState([])

    const validateNews = (data)=>{
        const newsValidated = data.filter(n => (n.title!=='[Removed]'&& n.title!==null) && (n.content!=='[Removed]'&& n.content!==null) )
        const result = newsValidated.filter(obj=> obj.urlToImage !== null)
        localStorage.setItem('carouselNews', JSON.stringify(result))
        setNews(result)
    }


    return(
        <RequestContext.Provider value={{
            news,
            setNews,
            validateNews
        }}>
            {children}
        </RequestContext.Provider>
    )
}