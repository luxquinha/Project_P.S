import React from 'react'
import { Card } from '../Card/index'
import { Modal } from '../Modal'
import { Eye } from 'lucide-react'
import useThemeContext from '../../hooks/useTheme'

const CategoryNewsLine = ({lineNews}) => {

  const {handleModal} = useThemeContext()

  return (
    <>
      <Card.Root className='w-[24.5%] h-[300px] flex-row shrink-0 items-end overflow-hidden hover:cursor-grab'
      whileTap={{cursor: 'grabbing'}}>
          <Card.Content 
          title={lineNews.title} 
          className='z-10 px-3 h-1/4'
          titleStyle='text-xl'
          descriptionStyle='text-sm'
          />
          <Card.Image url={lineNews.url} className='absolute rounded-lg'/>
          <Modal.Trigger action={()=>(handleModal(lineNews))} icon={<Eye size={18}/>} className='right-2 top-2 w-6 h-6'/>
      </Card.Root>
    </>
  )
}

export default CategoryNewsLine