import { Construction, ArrowLeft } from 'lucide-react';

function MeusProcessos(){
    return (
         <>
            <div className="mb-10">
                <h1 className="font-bold text-4xl">Meus Processos</h1>
                <h1 className="text-gray-600 mt-1">Gerencie todos os processos salvos em sua área de trabalho</h1>
            </div>
            <div className='flex flex-col gap-2 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.25)] md:w-96 py-2 bg-gray-50'>
                <div className='flex gap-1 px-4 py-1'>
                    <p>04/02/2026</p>

                </div>
                <hr className="text-gray-300 "/>
                <div className='flex flex-col gap-2 px-4 py-1'>
                    <h1 className='font-bold'>3005435-87.2022.8.06.0001</h1>
                    <div className='flex gap-1'>
                        <p>Processo:</p>
                        <p className='bg-blue-200 w-30 text-blue-600 rounded-md text-center'>2024.8.26.0100</p>
                    </div>
                </div>
                <hr className="text-gray-300 "/>
                <div>
                    <div className='flex gap-1 px-4 py-1 '>
                        <p >Parte autora:</p>
                        <p className='font-bold'>João Silva</p>
                    </div>
                    <div className='flex gap-1 px-4 py-1 '>
                        <p >Parte requerida:</p>
                        <p className='font-bold'>Estado</p>
                    </div>
                </div>
                <hr className="text-gray-300 "/>
                <div className='flex gap-2 px-4 py-1'>
                    <div className='flex flex-col'>
                        <p>Ação</p>
                        <p className=' bg-green-600 rounded-md text-center text-white text-xs p-1'>Manifestação sobre documentod</p>
                    </div>
                    <div className='flex flex-col'>
                        <p>Status:</p>
                        <p className=' bg-gray-400 rounded-md text-center text-white text-xs p-1'>Pedir intimação pessoal</p>
                    </div>
                </div>
                <hr className="text-gray-300"/>
                <div className='px-4 flex gap-2 '>
                    <p>Responsavel:</p>
                    <p>Dr. João Silva</p>
                </div>
                <hr className="text-gray-300"/>
                <div className='flex flex-col px-4  bg-gray-200 mb-4'>
                    <div className='flex justify-between'>
                        <label htmlFor="">Anotações</label>
                        <button className='text-blue-600'>Adicionar</button>
                    </div>
                    
                    <h1 className='italic'>Nenhuma anotação adicionada</h1>
                </div>
                <button className='bg-blue-500 rounded-md text-white mb-4 py-2'>Ver detalhes</button>
            </div>
         </>
    )
}

export default MeusProcessos