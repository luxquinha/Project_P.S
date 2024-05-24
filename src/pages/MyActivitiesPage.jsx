import React from 'react'
import { useParams } from 'react-router-dom'

const MyActivitiesPage = () => {

    const {atividade} = useParams()

  return (
    <div>
        <span>Tipo da atividade: {atividade}</span>
    </div>
  )
}

export default MyActivitiesPage