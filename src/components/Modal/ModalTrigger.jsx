import React from 'react'
import { twMerge } from 'tailwind-merge'
import { Button } from '../Button/index'

const ModalTrigger = ({action, icon, className}) => {
  return (
    <Button.Root 
    className={twMerge('flex items-center justify-center w-7 h-7 rounded-lg text-skin-inverted bg-skin-primary absolute top-1 right-4', className)}
    action={action}
    >
        <Button.Icon icon={icon}/>
    </Button.Root>
  )
}

export default ModalTrigger