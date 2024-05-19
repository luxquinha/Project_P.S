import React from 'react'
import useThemeContext from '../../hooks/useTheme'

const InputTextLabel = ({placeholder, type, register, onChangeAction, ...rest}) => {
  const {show, setShow} = useThemeContext()
  return (
    <>
      <input {...rest} type={type} placeholder={placeholder} data-show={show} {...register('search')} 
      className='w-[80%] h-full text-grayLogo px-2 outline-none bg-transparent text-sm font-medium align-middle data-[show=false]:hidden'
      autoComplete='off'
      onBlur={()=>{setShow(false)}}
    />
    </>
   
  )
}

export default InputTextLabel