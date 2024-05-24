import React from 'react'
import {Modal} from '../components/Modal/index'
import { CategoryNews } from '../components/Category/index'
import { Carousel} from '../components/Carousel/index'


// Página que vai mostrar um layout com as notícias de acordo com a categoria escolhida pelo usuário no menu:
const CategoriesPage = () => {
  return (
    <div>
        {/* <Modal.Root>
        <Modal.Window>
          <Modal.Image url={currNews.url}/>
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

      <CategoryNews.Root category='Esporte'>
          <CategoryNews.Hero mainNews={slideNews}/>
      </CategoryNews.Root>

      <Carousel.Draggable className='mt-1 py-2' category='Destaques'>
        {slideNews?.map((n,i)=>(
          <CategoryNews.Line lineNews={n} key={i}/>
        ))}
      </Carousel.Draggable> */}
    </div>
  )
}

export default CategoriesPage