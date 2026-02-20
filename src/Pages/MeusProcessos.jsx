import { Construction, ArrowLeft } from 'lucide-react';
import { Navigate, useFetcher, useNavigate} from 'react-router-dom';
import TelaLoading from '../Components/Loanding';
import { useEffect, useState, useMemo } from 'react';
import { useMultiProcess } from "../Hooks/useMultiProcess"

import { 
  FileSpreadsheet,
  Calendar,
  Clock3,
  MapPin 
} from "lucide-react";



function MeusProcessos(){
    const [process, setProcess] = useState([])
    const [numProcess, setNumProcess] = useState([])
    const [loading, setLoading] = useState(true)
    const numProcessosMemo = useMemo(() => numProcess, [numProcess])
    const navigate = useNavigate();
    const { process: processApi} = useMultiProcess(numProcessosMemo)

    useEffect(() => {
        async function handleProcess(){
            const token = localStorage.getItem("token")
           
            try {
                const response = await fetch("https://juridiccontrolback.onrender.com/process", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                const data = await response.json()
                setProcess(data)
                setNumProcess(data.map((item) => item.numeroProcesso)) 
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        handleProcess()
    }, [])

    if (loading || !processApi) {
        return <TelaLoading></TelaLoading>
    }

    console.log(processApi)

    return (
        <>
            <div className="mb-10">
                <h1 className="font-bold text-4xl">Meus Processos</h1>
                <h1 className="text-gray-600 mt-1">Gerencie todos os processos salvos em sua área de trabalho</h1>
            </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {processApi.map((processo, index) => (
            <div
            key={index}
            className="flex flex-col justify-between rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.15)] bg-white hover:shadow-[0_0_25px_rgba(0,0,0,0.25)] transition-all duration-300"
            >
            {/* HEADER */}
            <div className="p-5 border-b">
                <div className="flex justify-between items-start">
                <div>
                    <h1 className="font-bold text-lg break-all">
                    {processo.numeroProcesso}
                    </h1>
                    <p className="text-gray-500 text-sm">
                    {processo.tribunal}
                    </p>
                </div>

                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
                    {processo.status}
                </span>
                </div>
            </div>

            {/* INFORMAÇÕES PRINCIPAIS */}
            <div className="p-5 flex flex-col gap-4">

                {/* Assunto */}
                <div className="flex items-start gap-3">
                <FileSpreadsheet className="text-blue-600 w-5 h-5 mt-1" />
                <div>
                    <p className="text-xs text-gray-500">Assunto principal</p>
                    <p className="font-medium">
                    {processo.assuntos?.[0]?.nome || "Não informado"}
                    </p>
                </div>
                </div>

                {/* Vara */}
                <div className="flex items-start gap-3">
                <MapPin className="text-red-600 w-5 h-5 mt-1" />
                <div>
                    <p className="text-xs text-gray-500">Vara</p>
                    <p className="font-medium text-sm">
                    {processo.decisoes?.[1]?.orgaoJulgador?.nome ?? "Não informado"}
                    </p>
                </div>
                </div>

                {/* Data de distribuição */}
                <div className="flex items-start gap-3">
                <Calendar className="text-gray-600 w-5 h-5 mt-1" />
                <div>
                    <p className="text-xs text-gray-500">Distribuição</p>
                    <p className="font-medium text-sm">
                    {processo.dataDistribuicao || "Não informado"}
                    </p>
                </div>
                </div>

                {/* Classe */}
                <div>
                <p className="text-xs text-gray-500 mb-1">Classe</p>
                <span className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-md">
                    {processo.classe?.nome}
                </span>
                </div>

                {/* Última movimentação */}
                <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-xs text-blue-600 font-medium mb-1">
                    Última movimentação
                </p>
                <p className="text-sm font-medium">
                    {processo.ultimaMovimentacao?.nome || "Sem movimentações"}
                </p>
                <p className="text-xs text-gray-500">
                    {processo.ultimaMovimentacao?.dataHora}
                </p>
                </div>
            </div>

            {/* FOOTER */}
            <div className="p-5 border-t flex justify-between items-center">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Clock3 size={16} />
                {processo.diasTramitacao} dias
                </div>

                <button
                className="bg-[#193182] hover:bg-[#1038bc] text-white text-sm px-4 py-2 rounded-lg transition-colors"
                onClick={() => navigate(`/detalhesProcess/${processo.numeroProcesso}`)}
                >
                Ver detalhes
                </button>
            </div>
            </div>
        ))}
        </div>
    </>
    )
}

export default MeusProcessos