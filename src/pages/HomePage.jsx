import React from 'react'
import { Carousel } from '../components/Carousel/index'
import { CategoryNews } from '../components/Category/index'
import { Modal } from '../components/Modal/index'
import useThemeContext from '../hooks/useTheme'
import { ChevronRight, ChevronLeft, Eye, X } from 'lucide-react'
import { FaRegHeart } from 'react-icons/fa'
import { BsBookmark } from 'react-icons/bs'
import { HiOutlineBookOpen } from 'react-icons/hi'
// https://newsapi.org/v2/top-headlines?country=br&category=&apiKsey=API_KEY

const HomePage = () => {
  const {slideNews, prev, next, setOpenModal, currNews, handleModal} = useThemeContext()

  return (
    <section className='bg-skin-primary text-skin-base'>
      <div>
        <Carousel.Root slidePagination={true} autoSlide={true} className='max-w-[1400px] h-[500px] w-[98%]'>
          {slideNews?.map((n, i)=>(
            <Carousel.Image url={n.url} key={i}>
              <Carousel.Content 
              title={n.title}
              description={n.description}
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

      <CategoryNews.Root category='Esporte'>
          <CategoryNews.Hero mainNews={slideNews}/>
      </CategoryNews.Root>

      <Carousel.Draggable className='mt-1 py-2' category='Destaques da Semana:'>
        {slideNews?.map((n,i)=>(
          <CategoryNews.Line lineNews={n} key={i}/>
        ))}
      </Carousel.Draggable>
    </section>
  )
}

export default HomePage