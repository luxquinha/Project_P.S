import { useState } from "react"
import { RequestContext } from "./RequestContext"
import { useSliderNews } from "../../services/useHttpClient"

export const RequestProvider = ({children}) => {
    const [newsSlider, setNewsSlider] = useState([])
    const [newsSport, setNewsSport] = useState([])
    const [newsBusiness, setNewsBusiness] = useState([])
    const [newsEntertrainment, setNewsEntertrainment] = useState([])
    const [newsHealth, setNewsHealth] = useState([])
    const [newsTechnology, setNewsTechnology] = useState([])
    const [newsHighlights, setNewsHighlights] = useState([])

    // Valida noticias para que todas possuas title, description e imagem
    const validateNews = (data, type)=>{
        const newsValidated = data?.filter(n => 
            (n.title!=='[Removed]'&& n.title!==null) && 
            (n.description!=='[Removed]'&& n.description!==null) && 
            n.urlToImage !== null )
        handleKeepNews(newsValidated, type)
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
            }else if(type === 'entertrainmentMain'){
                localStorage.setItem(type, JSON.stringify(result))
                setNewsEntertrainment(result)
            }else if(type === 'HealthMain'){
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
        if(data.length<=x)
            return data
        else{
            const result = data.filter((_, i) => i<x)
            return result
        }
    }

    return(
        <RequestContext.Provider value={{
            newsSlider,
            setNewsSlider,
            newsBusiness,
            newsEntertrainment,
            newsHealth,
            newsHighlights,
            newsSport,
            newsTechnology,
            validateNews,
        }}>
            {children}
        </RequestContext.Provider>
    )
}