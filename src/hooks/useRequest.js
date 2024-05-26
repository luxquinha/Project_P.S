import { useContext } from "react"
import { RequestContext } from "../contexts/Request/RequestContext"


export default function useRequestContext() {
    const context = useContext(RequestContext)

    if(context === undefined){
        throw new Error('Não está dentro do contexto')
    }
    return context

}