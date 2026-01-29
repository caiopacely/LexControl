import logo from "../assets/Logo.png"
import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  Search,
  Folder,
  Upload,
  User
} from "lucide-react";

function Sidebar(){
    const menuItems = [
        { label: "Dashboard", icon: LayoutDashboard, path: "/" },
        { label: "Consultar", icon: Search, path: "/consultar" },
        { label: "Meus Processos", icon: Folder, path: "/processos" },
        { label: "Upload ", icon: Upload, path: "/upload" },
        { label: "Perfil", icon: User, path: "/perfil" },
    ];
    return(
        <>
            <aside className=" h-screen w-60 hidden md:flex bg-[#193182] text-white flex flex-col fixed ">
                <div className="flex flex-col items-center">
                    <img src={logo} alt="" className="mt-2 w-44 py-4"/>
                </div>
                <hr className="mt-4 text-blue-400"/> 
                <nav className="flex-1 px-3 py-4 space-y-1 flex flex-col">
                {menuItems.map((item) => {
                    const Icon = item.icon;

                    return (
                    <NavLink
                        key={item.label}
                        to={item.path}
                        className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-lg text-left transition
                        ${isActive ? "bg-blue-600" : "hover:bg-white/10"}`
                        }
                    >
                        <Icon size={18} />
                        <span>{item.label}</span>
                    </NavLink>
                    );
                })}
                </nav>

                <hr className=" text-blue-400 h-2 mb-20"/> 
            </aside>
            <div className='w-full md:hidden bg-[#193182]'>
                <img className="w-40 p-2" src={logo} alt="" />
             </div>
            <nav className="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden flex justify-around py-2">
                {menuItems.map(item => {
                    const Icon = item.icon;
                    return (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                        `flex flex-col items-center text-xs ${
                            isActive ? "text-blue-900" : "text-gray-400"
                        }`
                        }
                    >
                        <Icon size={20} />
                        {item.label}
                    </NavLink>
                    );
                })}
                </nav>
        </>
    )
}

export default Sidebar