import { useEffect, useState } from "react";
import api from "../Services/Api";

export function useMultiProcess(numProcessos = []) {
  const [process, setProcess] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!numProcessos || numProcessos.length === 0) return;

    async function fetchProcessos() {
      setLoading(true);
      setError(null);

      try {
        const resultados = await Promise.all(
          numProcessos.map(numero => {
            const numeroLimpo = numero.replace(/\D/g, "");
            return api.get(`/processo/${numeroLimpo}`);
          })
        );

        setProcess(resultados.map(r => r.data));

      } catch (err) {
        console.error("Falha ao consultar api", err);
        setError("Não foi possível localizar os processos");
      } finally {
        setLoading(false);
      }
    }

    fetchProcessos();
  }, [numProcessos]);

  return { process };
}