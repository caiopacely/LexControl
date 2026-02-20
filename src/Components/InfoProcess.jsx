import { Star } from 'lucide-react';
import { useNavigate} from 'react-router-dom';
import Loading from './Loanding';
import { useState } from 'react';


function InfoProcess({ process }) {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    if (!process) return <Loading></Loading>;

    const {
        numeroProcesso,
        status,
        tribunal,
        dataAjuizamento,
        classe,
        faseAtual,
        assuntos,
        orgaoJulgador,
        ultimaMovimentacao,
        decisoes,
        distribuicao,
    } = process;

  
  async function saveProcess() {
  console.log("Salvar")
  setLoading(true);

  try {
    const token = localStorage.getItem("token");
    console.log(token)
    const response = await fetch("https://juridiccontrolback.onrender.com/process", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        
      },
      body: JSON.stringify({
        numeroProcesso,
        status,
        tribunal,
        dataAjuizamento,
        tipo:classe.nome,
        faseAtual,
        assuntos,
        orgaoJulgador,
        ultimaMovimentacao,
        decisoes,
        vara:decisoes?.[1]?.orgaoJulgador?.nome,
        dataDistribuicao: distribuicao?.dataHora
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Erro ao salvar processo");
    }

    console.log("Processo salvo com sucesso!", data);

  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
}
  return (
    <>
      <div className=" mt-8 mb-10 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.25)] bg-gray-50">
        <div className="p-8 flex justify-between">
          <div>
            <h1 className="text-2xl font-bold">Processo Encontrado</h1>
            <p className="text-gray-600">{numeroProcesso}</p>   
          </div>

          <button className="border-blue-600 border rounded-md px-2 h-10 flex items-center gap-1 text-blue-600 hover:bg-blue-100"
            onClick={saveProcess}
          >
            <Star /> Salvar
          </button>
        </div>

        <hr className="text-gray-300" />

        <div className="p-8">
          <h1 className="text-xl">Informações Gerais</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-200 rounded-md py-2 px-4">
              <p className="text-gray-600">Número do Processo</p>
              <h1>{numeroProcesso}</h1>
            </div>

            <div className="bg-gray-200 rounded-md py-2 px-4">
              <p className="text-gray-600">Status</p>
              <h1 className="bg-blue-200 w-40 text-blue-600 rounded-md text-center">
                {status}
              </h1>
            </div>

            <div className="bg-gray-200 rounded-md py-2 px-4">
              <p className="text-gray-600">Vara</p>
              <h1>{decisoes?.[1]?.orgaoJulgador?.nome ?? 'Não informado'}</h1>
            </div>

            <div className="bg-gray-200 rounded-md py-2 px-4">
              <p className="text-gray-600">Tribunal</p>
              <h1>{tribunal}</h1>
            </div>

            <div className="bg-gray-200 rounded-md py-2 px-4">
              <p className="text-gray-600">Órgão Julgador</p>
              <h1>{orgaoJulgador?.nome}</h1>
            </div>

            <div className="bg-gray-200 rounded-md py-2 px-4">
              <p className="text-gray-600">Data de ajuizamento</p>
              <h1>{dataAjuizamento}</h1>
            </div>
          </div>
        </div>

        <div className="px-8">
          <h1 className="text-xl">Sobre</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-200 rounded-md py-2 px-4">
              <p className="text-gray-600">Tipo de ação judicial</p>
              <h1>{classe?.nome}</h1>
            </div>

            <div className="bg-gray-200 rounded-md py-2 px-4">
              <p className="text-gray-600">Assunto principal</p>
              <h1>{assuntos?.[0]?.nome}</h1>
            </div>
          </div>
        </div>

        <div className="p-8">
          <h1 className="text-xl">Fase atual</h1>
          <div className="bg-blue-200 text-blue-600 rounded-md py-2 px-4 mt-4">
            {faseAtual}
          </div>
        </div>
        <div className="px-8">
          <h1 className="text-xl">Última movimentação</h1>

          <div className="bg-gray-200 rounded-md py-2 px-4 mt-4">
            <p className="text-gray-600">
              {ultimaMovimentacao?.dataHora}
            </p>
            <h1>{ultimaMovimentacao?.nome}</h1>
          </div>
        </div>

        <div className="p-8">
          <button className="bg-[#193182] hover:bg-[#1038bc] w-full p-2 rounded-md text-white cursor-pointer"
          onClick={() => navigate(`/detalhesProcess/${numeroProcesso}`)}>
            Ver detalhes completos
          </button>
        </div>
      </div>
    </>
  );
}

export default InfoProcess;
