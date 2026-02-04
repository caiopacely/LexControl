import { SearchX } from "lucide-react";

function ProcessNotFound() {
  return (
    <div className="w-full flex justify-center mt-20">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-md border border-gray-100 p-12 text-center">
        
        <div className="flex justify-center mb-6">
          <div className="bg-blue-50 text-blue-600 p-5 rounded-full">
            <SearchX size={40} />
          </div>
        </div>

        <h1 className="text-2xl font-semibold text-gray-800">
          Processo não encontrado
        </h1>

        <p className="text-gray-500 mt-3 leading-relaxed">
          O número do processo informado não foi localizado em nossa base de
          dados. Verifique se o número foi digitado corretamente e tente
          novamente.
        </p>

      </div>
    </div>
  );
}

export default ProcessNotFound;
