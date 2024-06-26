import React, { useEffect } from 'react'
import { useQuery } from "@tanstack/react-query";
import { getCategories } from '../../services/useHttpClient';
import useRequestContext from '../../hooks/useRequest'
import CategoryNewsHero from './CategoryNewsHero';


const CategoryNewsRoot = ({category, children}) => {
  const {validateNews, newsBusiness,newsHealth,newsSport,newsTechnology, getNewsCache} = useRequestContext()
  const {data, isLoading, status} = useQuery({
    queryKey: [`${category}`, category],
    queryFn: ({queryKey})=>{
      return getCategories(queryKey[1])
    }
  })
  const dataIndex = {
    'sports': newsSport,
    'business': newsBusiness,
    'health': newsHealth,
    'technology': newsTechnology
  }

  useEffect(()=>{
    if(!isLoading)
      validateNews(data, category.toLowerCase().concat('Main'))
    if(status === 'error')
      getNewsCache(category.toLowerCase().concat('Main'))
  },[data])

  return (
    <div className='w-full min-h-[calc(100vh-650px)] mt-4 pb-4'>
        <h2 className='text-3xl md:text-4xl h-10 ml-5 mb-5 font-medium text-skin-inverted capitalize'>{category}</h2>
        {isLoading ? <span>Carregando</span>: <CategoryNewsHero mainNews={dataIndex[category]}/>}
    </div>
  )
}

export default CategoryNewsRoot