
import React from 'react';

export const Footer: React.FC = () => (
    <footer className="text-center p-8 text-slate-500 border-t border-white/10 mt-20">
        <p>&copy; {new Date().getFullYear()} Pedro Henrique Garcia. Todos os direitos reservados.</p>
        <p className="text-sm mt-2 font-mono">
            Feito com <span className="text-brand-primary">React</span>, <span className="text-brand-primary">TypeScript</span> & <span className="text-brand-primary">Tailwind CSS</span>
        </p>
    </footer>
);
