import React from 'react'
import { InputText } from '../InputText/index'
import { useForm } from 'react-hook-form'
import useThemeContext from '../../hooks/useTheme'
import { twMerge } from 'tailwind-merge'
import { Search } from 'lucide-react'

const NavbarSearch = ({rootStyle, formStyle, actionStyle, iconSize}) => {
    const { register, handleSubmit} = useForm()
    const { setShow, show } = useThemeContext()
    
    const handleSearch = (params) =>{
        console.log(params);
    }
  return (
    <InputText.Root 
    onBlur={()=>{setShow(false)}}
    data-show={show}
    className={twMerge('data-[show=true]:bg-skin-button-hover', rootStyle)}>
        <form onSubmit={handleSubmit(handleSearch)} className={twMerge('w-full flex flex-row items-center', formStyle)}>
            <InputText.Label type={'text'} placeholder={'Type here to search'}
            register={register}
            />
        </form>
        <InputText.Action icon={<Search size={iconSize}/>} 
        onMouseOver={()=>{setShow(true)}}
        action={()=>{setShow(false)}}
        type='submit'
        className={twMerge(actionStyle)}
        />
    </InputText.Root>
  )
}

export default NavbarSearch
