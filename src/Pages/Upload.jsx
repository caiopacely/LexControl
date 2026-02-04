import { Construction, ArrowLeft } from 'lucide-react';

function Upload(){
    return (
         <div className=" bg-gradient-to-br h-full flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-md w-full text-center">
                {/* Ícone animado */}
                <div className="mb-6 flex justify-center">
                    <div className="bg-blue-100 rounded-full p-6 animate-pulse">
                        <Construction size={64} className="text-blue-600" />
                    </div>
                </div>
                
                {/* Título */}
                <h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">
                    Página em Desenvolvimento
                </h1>
                
                {/* Descrição */}
                <p className="text-gray-600 mb-8">
                    Estamos trabalhando nesta funcionalidade. Em breve estará disponível para você!
                </p>
                
                {/* Barra de progresso decorativa */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-8 overflow-hidden">
                    <div className="bg-blue-600 h-2 rounded-full animate-[progress_2s_ease-in-out_infinite]" 
                         style={{ width: '60%' }}></div>
                </div>
                
                {/* Botão voltar */}
                <button 
                    onClick={() => window.history.back()}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center gap-2 mx-auto transition-colors"
                >
                    <ArrowLeft size={20} />
                    Voltar
                </button>
            </div>
        </div>
    )
}

export default Upload

