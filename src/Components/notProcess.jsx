import { SearchX } from "lucide-react";
import { useNavigate } from "react-router-dom";

function NotProcess() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-center items-center md:mt-20 px-4 ">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg border border-gray-100 p-12 text-center transition-all">

        {/* Ícone */}
        <div className="flex justify-center mb-6">
          <div className="bg-blue-50 text-blue-600 p-6 rounded-full">
            <SearchX size={42} />
          </div>
        </div>

        {/* Título */}
        <h1 className="text-2xl font-bold text-gray-800">
          Nenhum processo encontrado
        </h1>

        {/* Descrição */}
        <p className="text-gray-500 mt-3 leading-relaxed max-w-md mx-auto">
          Você ainda não possui processos salvos em sua área de trabalho.
          Faça uma consulta para começar a acompanhar seus processos.
        </p>

        {/* Botão de ação */}
        <div className="mt-8">
          <button
            onClick={() => navigate("/consultar")}
            className="bg-[#193182] hover:bg-[#1038bc] text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Consultar processo
          </button>
        </div>

      </div>
    </div>
  );
}

export default NotProcess;