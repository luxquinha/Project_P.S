import React from 'react'
import { Button } from '../Button'
import { twMerge } from 'tailwind-merge'

const CarouselAction = ({action, className, icon}) => {
  return (
    <Button.Root className={twMerge('hover:text-skin-hover items-center absolute', className)}>
        <Button.Icon icon={icon} action={action} />
    </Button.Root>
  )
}

export default CarouselAction