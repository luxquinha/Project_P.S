import React from 'react'
import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'

const CardRoot = ({children, className, ...rest}) => {
  return (
    <motion.div {...rest} className={twMerge('relative flex rounded-lg bg-skin-button-hover lg:bg-skin-secondary justify-end overflow-hidden cursor-default', className)}>
        {children}
    </motion.div>
  )
}

export default CardRoot