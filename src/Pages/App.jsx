import { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import { Routes, Route } from "react-router-dom";
import Consultar from './Consultar'
import Dashboard from './Dashboard';



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
        </Routes>
      </main>
    </div>
  );
}

export default App;
