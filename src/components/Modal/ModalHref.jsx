import React from 'react'
import { Button } from '../Button/index'
import { twMerge } from 'tailwind-merge'

const ModalHref = ({url, icon, label = '', className}) => {
  return (
    <div>
        <a 
        href={url}
        target='_blank'
        className={twMerge('flex flex-row gap-x-2 bg-transparent rounded-sm hover:cursor-pointer text-skin-inverted items-center w-24 h-8 md:scale-125 hover:bg-skin-secondary hover:scale-110 md:hover:scale-[1.35] hover:shadow-md justify-center hover:font-medium', className)}
        >
            <Button.Icon icon={icon}/>
            {label!==''&& <Button.Text text={label}/>}
        </a>
    </div>
  )
}

export default ModalHref