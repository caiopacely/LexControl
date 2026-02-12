import { Routes, Route } from "react-router-dom";
import  LoginPage  from "../Pages/LoginPage";
import Layout from "../Routes/Layout";
import  {PrivateRoute}  from "../Routes/PrivateRoute";
import CadastroPage from "./CadastroPage";

function App() {
  return (
    <Routes>
      {/* 🔓 Rota pública */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cadastroPage" element={<CadastroPage/>} />

      {/* 🔒 Rotas protegidas */}
      <Route
        path="/*"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
