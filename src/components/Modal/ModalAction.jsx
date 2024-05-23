import React from 'react'
import {Button} from '../Button/index'
import { twMerge } from 'tailwind-merge'

const ModalAction = ({action, icon, label = '', className}) => {
  return (
    <Button.Root className={twMerge('w-24 h-8 md:scale-125 hover:bg-skin-secondary hover:scale-110 md:hover:scale-[1.35] hover:shadow-md justify-center rounded-sm hover:font-medium', className)}
    action={action}
    >
        <Button.Icon icon={icon}/>
        {label!==''&& <Button.Text text={label}/>}
    </Button.Root>
  )
}

export default ModalAction