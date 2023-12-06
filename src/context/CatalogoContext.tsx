import Produto from "@/data/model/Produto"
import produtos from "@/data/model/constants/produtos"
import { createContext } from "react"

interface CatalogoContextProps {
    produtos: Produto[]
}

const CatalogoContext = createContext<CatalogoContextProps>({} as any)

export function CatalogoProvider(props: any) {
    return (
        <CatalogoContext.Provider 
            value={{
                produtos,
            }}>
            {props.children}
        </CatalogoContext.Provider>
    )
}

export default CatalogoContext