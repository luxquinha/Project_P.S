import { useState } from "react"
import { ThemeContext } from "./ThemeContext"



export const ThemeProvider = ({children}) =>{
    const [theme, setTheme] = useState('theme-light')
    const [show, setShow] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [openSideBar,setOpenSideBar] = useState(false)
    const [current, setCurrent] = useState(0)
    const [currNews, setCurrNews] = useState({})
    const slideNews = [
        {
            url: "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww",
            title: 'Titulo que vem do card da noticia 0',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            url: 'https://img.freepik.com/fotos-gratis/respingo-colorido-abstrato-3d-background-generativo-ai-background_60438-2509.jpg',
            title: 'Titulo que vem do card da noticia 1',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        },
        {
            url: 'https://services.meteored.com/img/article/inteligencia-artificial-aprende-a-reconstruir-imagens-vistas-por-pessoas-ciencia-fotos-1679175318563_1280.jpg',
            title: 'Titulo que vem do card da noticia 2',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        },
        {
            url: 'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/6192/live/61bb3530-f641-11ee-91c5-c92e09ae6ba7.jpg',
            title: 'Titulo que vem do card da noticia 3',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        },
        {
            url: 'https://cdn.pixabay.com/photo/2014/05/05/14/14/meadow-338211_1280.jpg',
            title: 'Titulo que vem do card da noticia 4',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        },
    ]

    const handleHoverAction = () => {
        setShow(true)
    }

    const handleToggleTheme = () => {
        setTheme(prev =>(prev==='theme-dark' ? 
        (localStorage.theme='theme-light', prev='theme-light'):
        (localStorage.theme='theme-dark', prev='theme-dark')))
    }

    const prev = () =>{
        setCurrent((prevState)=> prevState===0 ? (slideNews.length-1): (prevState-1))
    }
    const next = () =>{
        setCurrent((prevState)=> prevState===(slideNews.length-1) ? 0 : (prevState+1))
    }

    const handleModal = (data=null) => {
        if(!data) return
        setCurrNews(data)
        setOpenModal(true)
    }
    return(
        <ThemeContext.Provider 
        value={{ 
        handleHoverAction, 
        handleToggleTheme, 
        handleModal, 
        currNews,
        slideNews, 
        prev, 
        next, 
        show, 
        setShow, 
        theme,
        setTheme, 
        current, 
        setCurrent, 
        openModal, 
        setOpenModal, 
        openSideBar,
        setOpenSideBar
        }}>
            {children}
        </ThemeContext.Provider>
    )
}