import { useEffect, useState } from "react";
import api from "../Services/Api";


export function UseProcess(numProcesso) {  const [process, setProcess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!numProcesso?.trim()) return;

    async function fetchProcess() {
      setLoading(true);
      setError(null);

      try {
        const numeroLimpo = numProcesso.replace(/\D/g, '');
        const response = await api.get(`/processo/${numeroLimpo}`);
        setProcess(response.data);
        console.log(response.data)
      } catch (err) {
        console.error("Falha ao consultar api", err);
        setError("Não foi possível localizar o processo");
        setProcess(null);
      } finally {
        setLoading(false);
      }
    }

    fetchProcess();
  }, [numProcesso]);

  return { process, loading, error };
}
