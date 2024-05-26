import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const getNews = async ()=>{
    const result = JSON.parse(localStorage.getItem('carouselNews'))
    if(result.length>0 && result!==undefined){
        return result
    }else{
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=science&pageSize=15&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`) 
        return response.data.articles
    }
}

const getHighlights = async ()=>{
    const result = JSON.parse(localStorage.getItem('Highlights'))
    if(result.length>0 && result!==undefined){
        return result
    }else{
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=general&pageSize=15&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
        return response.data.articles
    }
}

export const getCategories = async (category)=>{
    const result = JSON.parse(localStorage.getItem(`${category.toLowerCase().concat('Main')}`))
    if(result.length>0 && result!==undefined){
        return result
    }else{
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=15&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
        return response.data.articles
    }
}

export const useSliderNews = () => {
    return useQuery({
        queryKey: ['carousel'],
        queryFn: getNews
    }
)
}

export const useHighlightsNews = () => {
    return useQuery({
        queryKey: ['draggable'],
        queryFn: getHighlights
    })
}