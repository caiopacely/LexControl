import Sidebar from '../Components/Sidebar'
import Consultar from '../Pages/Consultar'
import Dashboard from '../Pages/Dashboard';
import MeusProcessos from '../Pages/MeusProcessos';
import Upload from '../Pages/Upload';
import Perfil from '../Pages/Perfil';
import DetalhesProcess from '../Pages/DetalhesProcess';
import { Routes, Route } from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />

      <main className="flex-1 p-10 md:ml-60 bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/consultar" element={<Consultar />} />
          <Route path="/meusProcessos" element={<MeusProcessos />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/detalhesProcess/:numeroProcesso" element={<DetalhesProcess />} />
        </Routes>
      </main>
    </div>
  );
}

export default Layout;
