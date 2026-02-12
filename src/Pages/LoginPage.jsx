import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Scale } from "lucide-react";


function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao fazer login");
      }

      // 🔐 Salvar token no localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/dashboard");

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e3a8a] to-[#556bb6] flex items-center justify-center p-4">
      <div className="w-full max-w-md ">

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl mb-4 shadow-xl">
            <Scale className="w-12 h-12 text-[#1e3a8a]" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">LexControl</h1>
          <p className="text-blue-200">Gestão Jurídica Inteligente</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Bem-vindo de volta
          </h2>
          <form onSubmit={handleLogin} className="space-y-5">

            {error && (
              <div className="bg-red-100 text-red-600 p-2 rounded-md text-sm">
                {error}
              </div>
            )}

            <div className="flex flex-col ">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 h-12 rounded-md p-4 bg-gray-100"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password">Senha</label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 h-12 rounded-md p-4 bg-gray-100"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-semibold"
            >
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </form>
          <div>
            <p className="mt-2">Não tem conta? <a className="text-blue-700" href="/cadastroPage">cadastre-se aqui</a></p>
          </div>

          <p className="text-center text-xs text-gray-500 mt-6">
            © 2026 LexControl
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage