import { useState } from "react";
import { Calendar, Search, Filter, Calendars, ArrowRight } from "lucide-react";

function Tasks() {
 

    const tarefasPorData = [
    {
        data: "2026-01-23",
        dataFormatada: "Hoje - 23/01/2026",
        processos: [
        {
            processNun: "20241490220238060001",
            tarefas: [
            {
                id: "65f1a2b3c4d5e6f789111111",
                userId: "65f1a2b3c4d5e6f789999999",
                processNun: "20241490220238060001",
                titulo: "Protocolar Petição Inicial",
                descricao: "Anexar documentos e comprovantes",
                dataVencimento: new Date("2026-01-23T00:00:00"),
                prioridade: "urgente",
                status: "pendente",
                concluida: false,
                dataConclusao: null,
                createdAt: new Date("2026-01-20T10:00:00"),
                updatedAt: new Date("2026-01-20T10:00:00"),
            },
            {
                id: "65f1a2b3c4d5e6f789222222",
                userId: "65f1a2b3c4d5e6f789999999",
                processNun: "20241490220238060001",
                titulo: "Revisar Contrato",
                descricao: "Verificar cláusulas 3 e 4",
                dataVencimento: new Date("2026-01-23T00:00:00"),
                prioridade: "normal",
                status: "em_andamento",
                concluida: false,
                dataConclusao: null,
                createdAt: new Date("2026-01-21T09:30:00"),
                updatedAt: new Date("2026-01-21T09:30:00"),
            },
            ],
        },
        ],
    },
    {
        data: "2026-01-24",
        dataFormatada: "Amanhã - 24/01/2026",
        processos: [
        {
            processNun: "30141490220238060001",
            tarefas: [
            {
                id: "65f1a2b3c4d5e6f789333333",
                userId: "65f1a2b3c4d5e6f789999999",
                processNun: "30141490220238060001",
                titulo: "Comparecer à Audiência",
                descricao: "Fórum Central - Sala 12",
                dataVencimento: new Date("2026-01-24T14:00:00"),
                prioridade: "urgente",
                status: "pendente",
                concluida: false,
                dataConclusao: null,
                createdAt: new Date("2026-01-22T08:00:00"),
                updatedAt: new Date("2026-01-22T08:00:00"),
            },
            ],
        },
        ],
    },
    ];

 return(
    <div>
        <div className="flex justify-between "> 
            <div className="mb-10">
                <h1 className="font-bold text-4xl flex items-center gap-2"><Calendar className="text-blue-600 size-8 hidden md:flex"></Calendar> Demandas do Dia</h1>
                <h1 className="text-gray-600 mt-1">Confira as atividades divididas por dia em seus processos</h1>
            </div>
            <button className="bg-blue-600 text-white rounded-md h-16 p-2 mt-4">+ Nova tarefa</button>
        </div>
        <div>
            {tarefasPorData.map((dataItem,index)=>(
                <div className="mb-6">
                     <h1 className="font-bold flex gap-2"><Calendars className="text-blue-600" /> {dataItem.data}</h1>
                     {dataItem.processos.map((processo, indexx)=>(
                        <div className=" mt-6  rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.2)] bg-gray-50 p-4 px-8 ">
                            <div className="flex gap-2">
                                <div
                                    className={`w-2 h-2 rounded-full mt-2 ${
                                        processo.prioridade === "urgente"
                                        ? "bg-red-500"
                                        : processo.prioridade === "baixa"
                                        ? "bg-yellow-500"
                                        : "bg-blue-500"
                                    }`}
                                />
                                <h1 className="font-bold">{processo.processNun}</h1>
                            </div> 
                            {processo.tarefas.map((tarefas)=>(
                            <div >   
                            <div className="flex flex-col gap-1 mt-4">
                                <div className="">
                                    <div  className="flex gap-2">
                                         <input type="checkbox" />
                                        <h1>{tarefas.titulo}</h1>
                                    </div>
                                   
                                    <div>  
                                        <p className="ml-4 flex gap-2 items-center text-gray-600"><ArrowRight className="size-4" /> {tarefas.descricao}</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                            ))}
                        </div>
                        
                    ))}
                </div>
            ))}
            
        </div>

        
    </div>
  );
}

export default Tasks;
