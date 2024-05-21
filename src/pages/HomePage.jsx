import React from 'react'
import { Carousel } from '../components/Carousel/index'
import { Modal } from '../components/Modal/index'
import useThemeContext from '../hooks/useTheme'
import { ChevronRight, ChevronLeft, Eye, X } from 'lucide-react'
import { FaRegHeart } from 'react-icons/fa'
import { BsBookmark } from 'react-icons/bs'
import { HiOutlineBookOpen } from 'react-icons/hi'
// https://newsapi.org/v2/top-headlines?country=br&category=&apiKey=API_KEY

const HomePage = () => {
  const {slideNews, prev, next, setOpenModal, currNews, handleModal} = useThemeContext()

  return (
    <section className='bg-skin-primary text-skin-base'>
      <div>
        <Carousel.Root slidePagination={true} autoSlide={true}>
          {slideNews?.map((n, i)=>(
            <Carousel.Image url={n.url} key={i}>
              <Carousel.Content 
              title={n.title}
              description={n.description}
              />
              <Carousel.Actions>
                <Carousel.Action action={()=>(handleModal(n))} icon={<Eye size={20}/>}
                className='flex items-center justify-center w-7 h-7 rounded-lg bg-skin-primary absolute top-1 right-4'
                />
                <Carousel.Action action={prev} icon={<ChevronLeft size={60}/>} className='left-1'/>
                <Carousel.Action action={next} icon={<ChevronRight size={60}/>} className='right-1'/>
              </Carousel.Actions>
            </Carousel.Image>
          ))}
        </Carousel.Root>
      </div>
      <Modal.Root>
        <Modal.Window>
          <Modal.Image url={currNews.url}/>
          <Modal.Content title={currNews.title} description={currNews.description}>
            <Modal.Actions>
              <Modal.Action icon={<X size={23}/>} action={()=>(setOpenModal(false))} className='absolute top-1 right-1 w-8 h-8 hover:bg-transparent hover:scale-110'/>
              <Modal.Action label='Gostei' icon={<FaRegHeart size={20}/>} action={()=>(console.log('Gostei'))}/>
              <Modal.Action label='Ler depois' icon={<BsBookmark size={18}/>} action={()=>(console.log('Ler depois'))}/>
              <Modal.Action label='Ler agora' icon={<HiOutlineBookOpen size={23}/>} action={()=>(console.log('Ler agora'))}/> 
            </Modal.Actions>
          </Modal.Content>
        </Modal.Window>
      </Modal.Root>
      <div className='w-full h-screen bg-skin-terciary'>

      </div>
    </section>
  )
}

export default HomePage