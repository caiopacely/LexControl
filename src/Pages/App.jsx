import { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import { Routes, Route } from "react-router-dom";
import Consultar from './Consultar'
import Dashboard from './Dashboard';
import MeusProcessos from './MeusProcessos';
import Upload from './Upload';
import Perfil from './Perfil';
import DetalhesProcess from './DetalhesProcess';




function App() {
  return (
  <div className="flex flex-col md:flex-row">
    <div>
      <Sidebar />
    </div>
      

      <main className="flex-1 p-10 md:ml-60 bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<Dashboard/>} /> 
          <Route path="/consultar" element={<Consultar />} /> 
          <Route path="/meusProcessos" element={<MeusProcessos/>} /> 
          <Route path="/upload" element={<Upload/>} /> 
          <Route path="/perfil" element={<Perfil/>} />
          <Route path="/detalhesProcess/:numeroProcesso" element={<DetalhesProcess />} />       
        </Routes>
      </main>
    </div>
  );
}

export default App;
