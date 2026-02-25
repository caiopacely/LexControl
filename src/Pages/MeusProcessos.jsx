import CardProcess from "../Components/CardProcess"




function MeusProcessos(){
 
    return (
        <div className=''>
            <div className="mb-10">
                <h1 className="font-bold text-4xl">Meus Processos</h1>
                <h1 className="text-gray-600 mt-1">Gerencie todos os processos salvos em sua área de trabalho</h1>
            </div>
            <CardProcess></CardProcess>
        </div>
    
    )
}

export default MeusProcessos