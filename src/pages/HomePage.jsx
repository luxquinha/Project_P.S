import React, { useEffect } from 'react'
import { Carousel } from '../components/Carousel/index'
import { CategoryNews } from '../components/Category/index'
import { Modal } from '../components/Modal/index'
import useThemeContext from '../hooks/useTheme'
import useRequesContext from '../hooks/useRequest'
import { ChevronRight, ChevronLeft, Eye, X } from 'lucide-react'
// import { RiEyeCloseFill } from "react-icons/ri"
// import { LiaEye } from "react-icons/lia"
import { FaRegHeart } from 'react-icons/fa'
import { BsBookmark } from 'react-icons/bs'
import { HiOutlineBookOpen } from 'react-icons/hi'
import { useSliderNews } from '../services/useHttpClient'

const HomePage = () => {
  const { prev, next, setOpenModal, currNews, handleModal, menus} = useThemeContext()
  const { newsSlider, validateNews, getNewsCache } = useRequesContext()
  const {data, isLoading, status} = useSliderNews()

  useEffect(()=>{
    if(isLoading===false)
      validateNews(data, 'carouselNews')
    if(status === 'error')
      getNewsCache('carouselNews')
  },[isLoading])

  if(isLoading){
    return(
      <span className='text-skin-base text-2xl'>Carregando</span>
    )
  }

  return (
    <section className='bg-skin-primary text-skin-base'>
      <div>
        <Carousel.Root slidePagination={true} autoSlide={true} autoSlideInterval={10000} className='max-w-[1400px] w-[98%] h-[calc(100vh-106px)]'>
          {newsSlider?.map((n, i)=>(
            <Carousel.Image url={n?.urlToImage} key={i}>
              <Carousel.Content 
              title={n?.title}
              description={n?.description}
              />
              <Carousel.Actions>
                <Modal.Trigger action={()=>(handleModal(n))} icon={<Eye size={20}/>}/>
                <Carousel.Action action={prev} icon={<ChevronLeft size={60}/>} className='left-1'/>
                <Carousel.Action action={next} icon={<ChevronRight size={60}/>} className='right-1'/>
              </Carousel.Actions>
            </Carousel.Image>
          ))}
        </Carousel.Root>
      </div>

      <Carousel.Draggable className='mt-1 py-2' category='Breaking News'/>

      {menus[1].menus.map((menu, i)=>(
        <CategoryNews.Root category={menu.label} key={i}/>
      ))}

      <Modal.Root>
        <Modal.Window>
          <Modal.Image url={currNews.urlToImage}/>
          <Modal.Content title={currNews.title} description={currNews.description}>
            <Modal.Actions>
              <Modal.Action icon={<X size={23}/>} action={()=>(setOpenModal(false))} className='absolute top-1 right-1 w-8 h-8 hover:bg-transparent hover:scale-110'/>
              <Modal.Action label='Gostei' icon={<FaRegHeart size={20}/>} action={()=>(console.log('Gostei'))}/>
              <Modal.Action label='Salvar' icon={<BsBookmark size={18}/>} action={()=>(console.log('Ler depois'))}/>
              <Modal.Href label='Abrir' icon={<HiOutlineBookOpen size={25}/>} url={currNews?.url}/>
            </Modal.Actions>
          </Modal.Content>
        </Modal.Window>
      </Modal.Root>
    </section>
  )
}

export default HomePage