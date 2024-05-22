import React from 'react'

const CategoryNewsRoot = ({category, children}) => {
  return (
    <div className='w-full h-screen mt-4'>
        <h2 className='text-4xl ml-5 mb-5 font-medium text-skin-inverted'>{category}</h2>
        {children}
    </div>
  )
}

export default CategoryNewsRoot