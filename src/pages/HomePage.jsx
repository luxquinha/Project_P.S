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
import axios from 'axios'

const HomePage = () => {
  const {slideNews, prev, next, setOpenModal, currNews, handleModal} = useThemeContext()
  const { news, setNews, validateNews } = useRequesContext()

  const getNews = async ()=>{
    try{
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=science&pageSize=15&apiKey=2f5f3c912f1948529ffb9ec63c0af818') 
      validateNews(response.data?.articles)
    } catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    if(localStorage.carouselNews===undefined){
      getNews()
    }else{
      const results = JSON.parse(localStorage.getItem('carouselNews'))
      setNews(results)
    }
  },[])
  
  return (
    <section className='bg-skin-primary text-skin-base'>
      <div>
        <Carousel.Root slidePagination={true} autoSlide={true} autoSlideInterval={10000} className='max-w-[1400px] w-[98%] h-[calc(100vh-106px)]'>
          {news?.map((n, i)=>(
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
      <Modal.Root>
        <Modal.Window>
          <Modal.Image url={currNews.urlToImage}/>
          <Modal.Content title={currNews.title} description={currNews.description}>
            <Modal.Actions>
              <Modal.Action icon={<X size={23}/>} action={()=>(setOpenModal(false))} className='absolute top-1 right-1 w-8 h-8 hover:bg-transparent hover:scale-110'/>
              <Modal.Action label='Gostei' icon={<FaRegHeart size={20}/>} action={()=>(console.log('Gostei'))}/>
              <Modal.Action label='Salvar' icon={<BsBookmark size={18}/>} action={()=>(console.log('Ler depois'))}/>
              <Modal.Action label='Abrir' icon={<HiOutlineBookOpen size={23}/>} action={()=>(console.log('Ler agora'))}/> 
            </Modal.Actions>
          </Modal.Content>
        </Modal.Window>
      </Modal.Root>

      <CategoryNews.Root category='Sports'>
          <CategoryNews.Hero mainNews={slideNews}/>
      </CategoryNews.Root>

      <Carousel.Draggable className='mt-1 py-2' category='Breaking News'>
        {slideNews?.map((n,i)=>(
          <CategoryNews.Line lineNews={n} key={i}/>
        ))}
      </Carousel.Draggable>
    </section>
  )
}

export default HomePage