import { useContext } from "react";
import ContadorContext from "@/context/ContadorContext";
import Area from "../template/Area";

export default function Mais() {

    const ctx = useContext(ContadorContext)

    return (
        <Area titulo="Botao Mais" cor="green">
            <button className="btn" onClick={ctx.incrementar}>
                +1
            </button>
        </Area>      
    )
}