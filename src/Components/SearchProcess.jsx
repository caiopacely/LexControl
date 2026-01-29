import { Search } from "lucide-react";

function SearchProcess(){
    return(
        <>
            <div className=" h-30  flex rounded-xl items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.25)]">
                <div className="flex flex-col md:flex-row gap-2 md:items-start ">
                    <div className="flex flex-col gap-2 justify-center">
                         <input type="text" className="bg-gray-200 w-[70vw] md:w-[40vw] px-4 py-2 rounded-md" placeholder="Digite o numero do processo"/>
                        <p className="text-xs text-gray-500 ml-1 ">Exemplo: 1000123-45.2024.8.26.0100</p>
                    </div>
                     <button className="bg-blue-900 rounded-md p-1 md:p-4 flex items-center gap-2 mt-2 md:mt-0  text-white cursor-pointer" > <Search size={18} /> Consultar</button>
                </div>
            </div>
        </>
    )
}

export default SearchProcess