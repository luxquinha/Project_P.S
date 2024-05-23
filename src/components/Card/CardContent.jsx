import React from 'react'
import { twMerge } from 'tailwind-merge'

const CardContent = ({title, description='', className, titleStyle, descriptionStyle}) => {
  return (
    <div className={twMerge('flex flex-col gap-y-1 bg-gradient-to-t from-black from-10% to-transparent to-98% w-full rounded-lg', className)}>
      <h2 className={twMerge('font-medium text-skin-inverted hover:text-skin-inverted-hover hover:cursor-pointer', titleStyle)}>{title}</h2>
      {description!=='' && <h3 className={twMerge('ml-1 text-skin-muted w-[90%] truncate', descriptionStyle)}>{description}</h3>}
      
    </div>
  )
}

export default CardContent