import React from 'react'
import {Button} from '../Button/index'
import { twMerge } from 'tailwind-merge'

const ModalAction = ({action, icon, label = '', className}) => {
  return (
    <Button.Root className={twMerge('w-28 h-9 hover:bg-skin-secondary hover:scale-110 hover:shadow-md justify-center rounded-sm hover:font-medium', className)}
    action={action}
    >
        <Button.Icon icon={icon}/>
        {label!==''&& <Button.Text text={label}/>}
    </Button.Root>
  )
}

export default ModalAction