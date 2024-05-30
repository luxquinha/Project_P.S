import { useState } from "react"
import { RequestContext } from "./RequestContext"

export const RequestProvider = ({children}) => {
    const [newsSlider, setNewsSlider] = useState([])
    const [newsSport, setNewsSport] = useState([])
    const [newsBusiness, setNewsBusiness] = useState([])
    const [newsHealth, setNewsHealth] = useState([])
    const [newsTechnology, setNewsTechnology] = useState([])
    const [newsHighlights, setNewsHighlights] = useState([])

    // Valida noticias para que todas possuas title, description e imagem
    const validateNews = (data, type)=>{
        if(data!==undefined && data?.length > 0){
            const newsValidated = data?.filter(n => 
                (n.title!=='[Removed]'&& n.title!==null) && 
                (n.description!=='[Removed]'&& n.description!==null) && 
                n.urlToImage !== null )
            handleKeepNews(newsValidated, type)
        }
        else return
    }
    
    // guarda as noticias de acordo com o tipo e as envia para o localStorage
    const handleKeepNews = (data, type)=> {
        let result = '';
        if(type === 'carouselNews'){
            result = handleUnderXNews(data, 10)
            localStorage.setItem(type, JSON.stringify(result))
            setNewsSlider(result)
        }
        else if(type === 'Highlights'){
            result = handleUnderXNews(data, 10)
            localStorage.setItem(type, JSON.stringify(result))
            setNewsHighlights(result)
        }
        else{
            result = handleUnderXNews(data, 5)
            if(type === 'sportsMain'){
                localStorage.setItem(type, JSON.stringify(result))
                setNewsSport(result)
            }else if(type === 'businessMain'){
                localStorage.setItem(type, JSON.stringify(result))
                setNewsBusiness(result)
            }else if(type === 'healthMain'){
                localStorage.setItem(type, JSON.stringify(result))
                setNewsHealth(result)
            }else if(type === 'technologyMain'){
                localStorage.setItem(type, JSON.stringify(result))
                setNewsTechnology(result)
            }
        }
    }

    // Padroniza a quantidade de noticias necessárias para alimentar as secções
    const handleUnderXNews = (data, x) =>{
        if(data?.length<=x)
            return data
        else{
            const result = data?.filter((_, i) => i<x)
            return result
        }
    }

    // Pega os valores que estão guardados no localStorage
    const getNewsCache = (type) => {
        const result = JSON.parse(localStorage.getItem(type))
        if(type === 'carouselNews'){
            setNewsSlider(result)
        }else if(type === 'Highlights'){
            setNewsHighlights(result)
        }else if(type === 'sportsMain'){
            setNewsSport(result)
        }else if(type === 'businessMain'){
            setNewsBusiness(result)
        }else if(type === 'healthMain'){
            setNewsHealth(result)
        }else if(type === 'technologyMain'){
            setNewsTechnology(result)
        }
    }

    return(
        <RequestContext.Provider value={{
            newsSlider,
            setNewsSlider,
            newsBusiness,
            newsHealth,
            newsHighlights,
            newsSport,
            newsTechnology,
            validateNews,
            getNewsCache
        }}>
            {children}
        </RequestContext.Provider>
    )
}