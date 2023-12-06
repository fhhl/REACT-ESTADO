import Area from "@/components/template/Area";

export default function Temporario() {
    return (
        <div className="flex flex-col gap-5 p-20">
            <Area titulo="Teste do componente" cor="red">
                <div>01</div>
                <div>02</div>
                <div>03</div>
                <Area titulo="Teste do componente" sumario="R$ 1.200,56" cor="green">
                    <div>01</div>
                    <div>02</div>
                    <div>03</div>
                </Area>
            </Area>
        </div>
    )
}