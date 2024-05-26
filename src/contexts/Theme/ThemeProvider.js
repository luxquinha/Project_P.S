import { useState } from "react"
import { ThemeContext } from "./ThemeContext"
import useRequestContext from "../../hooks/useRequest"
// icones:
import { BsBookmarkFill } from 'react-icons/bs'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaHeart, FaHouse } from 'react-icons/fa6'
import { GiDiamondsSmile, GiGreatWarTank, GiHealthNormal } from 'react-icons/gi'
import { ImProfile } from 'react-icons/im'
import { MdSportsBasketball } from 'react-icons/md'
import { PiCircuitryFill } from 'react-icons/pi'



export const ThemeProvider = ({children}) =>{
    const {newsSlider} = useRequestContext()
    const [theme, setTheme] = useState('theme-light')
    const [show, setShow] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [openSideBar,setOpenSideBar] = useState(false)
    const [current, setCurrent] = useState(0)
    const [currNews, setCurrNews] = useState({})
    const menus = [
        {
          title: '',
          menus: [
            {
              id:3,
              label: 'Home',
              route: '/',
              icon: <FaHouse size={22}/>,
            },
            {
              id:4,
              label: 'About us',
              route: '/sobre',
              icon: <ImProfile size={22}/>,
              iconSize: 22,
            },
            {
              id:5,
              label: 'Contact',
              route: '/contato',
              icon: <FaPhoneAlt size={22}/>,
              iconSize: 22,
            }
          ]
        },
        {
          title: 'Categories',
          menus: [
            {
              id:6,
              label: 'sports',
              route: '/categorias/esporte',
              icon: <MdSportsBasketball size={22}/>,
            },
            {
              id:8,
              label: 'technology',
              route: '/categorias/tecnologia',
              icon: <PiCircuitryFill size={22}/>,
            },
            {
              id:9,
              label: 'health',
              route: '/categorias/saude',
              icon: <GiHealthNormal size={22}/>,
            },
            {
              id:10,
              label: 'business',
              route: '/categorias/guerra',
              icon: <GiGreatWarTank size={22}/>,
            }
          ]
        }
        ,{
          title: 'More',
          menus: [
            {
              id:11,
              label: 'Saved',
              route: '/minhaAtividade/salvos',
              icon: <BsBookmarkFill size={22}/>,
            },
            {
              id:12,
              label: 'Liked',
              route: '/minhaAtividade/curtidos',
              icon: <FaHeart size={22}/>,
            }
          ]
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
        setCurrent((prevState)=> prevState===0 ? (newsSlider.length-1): (prevState-1))
    }
    const next = () =>{
        setCurrent((prevState)=> prevState===(newsSlider.length-1) ? 0 : (prevState+1))
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
        setOpenSideBar,
        menus
        }}>
            {children}
        </ThemeContext.Provider>
    )
}