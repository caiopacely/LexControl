import InfoProcess from "../Components/infoProcess"
import SearchProcess from "../Components/SearchProcess"

function Consultar(){
    return(
        <>
        <div className="">
            <div className="mb-10">
                <h1 className="font-bold text-4xl">Consultar Processo</h1>
                <h1 className="text-gray-600 mt-1 ">Digite o número do processo para buscar informações</h1>
            </div>
            <SearchProcess></SearchProcess>
            <InfoProcess></InfoProcess>
        </div>         
        </>
    )
}

export default Consultar