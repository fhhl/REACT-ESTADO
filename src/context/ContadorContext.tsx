import { createContext, useState } from "react"

interface contadorContextProps {
   numero: number,
   incrementar: () => void 
   decrementar: () => void 
}

export const ContadorContext = createContext<contadorContextProps>({} as any)

export function ContadorProvider(props: any) {

    const [numero, setNumero] = useState(0)

    function incrementar() {
        setNumero(numero + 1)
    }

    function decrementar() {
        setNumero(numero - 1)
    }

    return (
       <ContadorContext.Provider value={{
            numero, incrementar, decrementar
       }}>
            {props.children}
       </ContadorContext.Provider> 
    )
}

export default ContadorContext