import InfoProcess from "../Components/InfoProcess"
import SearchProcess from "../Components/SearchProcess"
import api from "../Services/Api"
import { useState, useEffect } from "react"
import { UseProcess } from "../Hooks/UseProcess"
import Loading from "../Components/Loanding"
import ProcessNotFound from "../Components/ProcessNotFound"

function Consultar(){
    const [numProcess, setNumProcess] = useState(""); 
     const { process, loading, error } = UseProcess(numProcess);
    
    
    return(
        <>
            <div className="">
                <div className="mb-10">
                    <h1 className="font-bold text-4xl">Consulta de Processos</h1>
                    <h1 className="text-gray-600 mt-1">Digite o número do processo para buscar informações</h1>
                </div>
                
                <SearchProcess onSearch={setNumProcess}></SearchProcess>
                
                {loading && <Loading/>}
                {!loading && !process && numProcess && (
                    <ProcessNotFound />
                )}
                
                {process && (
                    <InfoProcess 
                        process={process}
                    />
                )}
                
            </div>         
        </>
    )
}

export default Consultar