import React from 'react'

const CategoryNewsRoot = ({category, children}) => {
  return (
    <div className='w-full min-h-[calc(100vh-650px)] mt-4'>
        <h2 className='text-3xl md:text-4xl h-10 ml-5 mb-5 font-medium text-skin-inverted'>{category}</h2>
        {children}
    </div>
  )
}

export default CategoryNewsRoot