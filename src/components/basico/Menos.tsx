import ContadorContext from "@/context/ContadorContext";
import Area from "../template/Area";
import { useContext } from "react";

export default function Menos() {

    const ctx = useContext(ContadorContext)

    return (
        <Area titulo="Botao Menos" cor="red">
            <button className="btn" onClick={ctx.decrementar}>
                -1
            </button>
        </Area> 
    )
}