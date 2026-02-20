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
          <div className="mt-8 bg-white shadow-[0_0_20px_rgba(0,0,0,0.15)] rounded-2xl p-6">
  <h1 className="text-xl font-bold mb-6">Movimentações</h1>

  <div className="flex flex-col gap-6">
    {process.movimentos.map((item, index) => (
      <div key={index} className="relative pl-10">

        {/* Linha vertical da timeline */}
        <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-blue-200"></div>

        {/* Bolinha da timeline */}
        <div className="absolute left-0 top-1 w-6 h-6 bg-[#193182] rounded-full flex items-center justify-center">
          <FileSpreadsheet className="text-white w-3 h-3" />
        </div>

        {/* Card da movimentação */}
        <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200">

          {/* Título */}
          <h2 className="font-semibold text-gray-800">
            {item.nome}
          </h2>

          {/* Data */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
            <Calendar className="w-4 h-4" />
            {new Date(item.dataHora).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </div>

          {/* Complementos */}
          {item.complementosTabelados?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {item.complementosTabelados.map((comp, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-medium"
                >
                  {formatLabel(comp?.descricao)} - {comp?.nome}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
</div>
        </>
    )
}

export default DetalhesProcess