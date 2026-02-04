import { Loader2 } from 'lucide-react';

function Loading() {
    return (
        <div className="flex flex-col items-center justify-center py-16 gap-4 h-full">
            <Loader2 size={48} className="text-blue-600 animate-spin" />
            <p className="text-gray-600 text-lg">Carregando...</p>
        </div>
    )
}

export default Loading