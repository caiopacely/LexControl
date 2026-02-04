import { Construction, ArrowLeft,FileSpreadsheet,Calendar,Clock3,RefreshCw,FileCheck,Gavel,MapPin} from 'lucide-react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../Services/Api";
import { UseProcess } from "../Hooks/UseProcess"
import Loading from '../Components/Loanding';

function DetalhesProcess(){
    const { numeroProcesso } = useParams();
    const { process, loading } = UseProcess(numeroProcesso);

    if(!process){
        return <Loading></Loading>
    }

    function formatLabel(text) {
        if (!text) return '';

        return text
            .replace(/_/g, ' ')              // troca _ por espaço
            .toLowerCase()                   // tudo minúsculo
            .replace(/^\w|\s\w/g, (l) => l.toUpperCase()); // primeira letra maiúscula
    }

    return (
        <> 
            <div className="mb-1 flex flex-col md:flex-row justify-between gap-2 w-full justify-between">
                <div>
                    <h1 className="font-bold text-2xl md:text-4xl">{process.numeroProcesso}</h1>
                    <h1 className="text-gray-600 mt-1">Processo judicial</h1>
                </div>
                
                <button 
                    onClick={() => window.history.back()}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-3 md:py-3 md:px-6   rounded-lg flex items-center gap-2  transition-colors"
                >
                    <ArrowLeft size={20} />
                    Voltar
                </button>
            </div>
            <div className='flex grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-10'>
                <div className='flex flex-col shadow-[0_0_20px_rgba(0,0,0,0.25)] p-4 md:p-6  rounded-2xl gap-1  md:min-w-40'>
                    <Clock3 className='bg-blue-200 text-blue-600 w-9 h-9 p-2 rounded-lg' />
                    <h1 className='text-gray-600'>Dias em tramitação</h1>
                    <h1 className='font-bold'>{process.diasTramitacao}</h1>
                </div>
                <div className='flex flex-col shadow-[0_0_20px_rgba(0,0,0,0.25)] p-4 md:p-6  rounded-2xl gap-1 md:min-w-40'>
                    <RefreshCw className='bg-purple-200 text-purple-600 w-9 h-9 p-2 rounded-lg' />
                    <h1 className='text-gray-600'>Total de movimentações</h1>
                    <h1 className='font-bold'>{process.movimentos.length}</h1>
                </div>
                <div className='flex flex-col shadow-[0_0_20px_rgba(0,0,0,0.25)] p-4 md:p-6  rounded-2xl gap-1  md:min-w-40'>
                    <FileCheck className='bg-green-200 text-green-600 w-9 h-9 p-2 rounded-lg' />
                    <h1 className='text-gray-600'>Petições</h1>
                    <h1 className='font-bold'>{process.peticoes.length}</h1>
                </div>
                <div className='flex flex-col shadow-[0_0_20px_rgba(0,0,0,0.25)] p-4 md:p-6  rounded-2xl gap-1  md:min-w-40'>
                    <Gavel className='bg-orange-200 text-orange-600 w-9 h-9 p-2 rounded-lg' />
                    <h1 className='text-gray-600'>Decisões</h1>
                    <h1 className='font-bold'>{process.decisoes.length}</h1>
                </div>
                <div className='flex flex-col shadow-[0_0_20px_rgba(0,0,0,0.25)] p-4 md:p-6  rounded-2xl gap-1  md:min-w-40'>
                    <Calendar className='bg-gray-200 text-gray-600 w-9 h-9 p-2 rounded-lg' />
                    <h1 className='text-gray-600'>Dias sem atualizações</h1>
                    <h1 className='font-bold'>{process.diasUltimaAtualizacao}</h1>
                </div>
                <div className='flex flex-col shadow-[0_0_20px_rgba(0,0,0,0.25)] p-4 md:p-6  rounded-2xl gap-1 md:min-w-40'>
                    <MapPin className='bg-red-200 text-red-600 w-9 h-9 p-2 rounded-lg' />
                    <h1 className='text-gray-600'>Fase atual</h1>
                    <h1 className='font-bold'>{process.faseAtual}</h1>
                </div>
            </div>
            <div className=" mt-6 shadow-[0_0_20px_rgba(0,0,0,0.25)] rounded-xl p-6">
                <h1 className='text-xl font-bold '>Informações gerais</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div className="">
                        <p className="text-gray-600">Vara</p>
                        <h1>{process.decisoes?.[1]?.orgaoJulgador?.nome ?? 'Não informado'}</h1>
                    </div>

                    <div className="">
                        <p className="text-gray-600">Tribunal</p>
                        <h1>{process.tribunal}</h1>
                    </div>

                    <div className="">
                        <p className="text-gray-600">Órgão Julgador</p>
                        <h1>{process.orgaoJulgador?.nome}</h1>
                    </div>

                    <div className="4">
                        <p className="text-gray-600">Data de ajuizamento</p>
                        <h1>{process.dataAjuizamento}</h1>
                    </div>
                </div>
          </div>
          <div className="mt-6 shadow-[0_0_20px_rgba(0,0,0,0.25)] rounded-xl p-6 grid grid-cols-1 md:grid-cols-1 flex gap-2 ">
            {process.movimentos.map((item, index) => (
                <div key={index} className=' flex  flex-col p-4 rounded-md shadow-[0_0_20px_rgba(0,0,0,0.1)] gap-2 border-solid border-1 border-blue-800'>
                    <h1 className='flex items-center gap-2'><FileSpreadsheet className='bg-[#193182] text-white rounded-full w-8 h-8 p-1 text-blue-800 '></FileSpreadsheet> {item.nome}</h1>
                    <h1 className='flex gap-2 items-center'><Calendar className='bg-[#193182] text-white rounded-full w-8 h-8 p-1 text-blue-800'/> {new Date(item.dataHora).toLocaleDateString('pt-BR', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric'
                        })}
                    </h1>
                    {item.complementosTabelados && (
                        <div className='flex gap-2 justify-between bg-[#193182] px-2 py-1 rounded-4xl'>
                            <p className='text-white'>{formatLabel(item.complementosTabelados[0]?.descricao)}</p>
                            <p className='bg-yellow-400 rounded-2xl px-2 border-solid border-1 border-gray-600 text-gary-800'>{item.complementosTabelados[0]?.nome}</p>
                        </div>
                        
                    )}

                </div>
            ))}
        </div>
        </>
    )
}

export default DetalhesProcess