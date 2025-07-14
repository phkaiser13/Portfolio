import React from 'react';
import { motion, Variants } from 'framer-motion';

const sectionVariants: Variants = {
    offscreen: { y: 75, opacity: 0, scale: 0.95 },
    onscreen: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 1.5
        }
    }
};

export const About: React.FC = () => (
    <motion.section 
        className="py-24 px-4 container mx-auto"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
    >
        <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-100 section-title">Sobre Mim</h2>
        </div>
        <div className="max-w-4xl mx-auto text-lg text-slate-300 leading-relaxed space-y-6 glass-pane animated-glowing-border p-8 md:p-12 rounded-2xl">
            <p className="text-shadow-pop">Desde criança sempre fui apaixonado por computadores: em 2018, aos 10 anos, criei minha primeira aplicação em <b className="font-bold text-brand-primary">Python</b> e logo comecei a mexer em mods em <b className="font-bold text-brand-primary">Java</b>. Na pandemia, meu interesse se voltou para sistemas de baixo nível, mergulhando em <b className="font-bold text-brand-primary">C</b> e, pouco depois, descobrindo <b className="font-bold text-brand-primary">Rust</b>.</p>
            <p className="text-shadow-pop">Estou no último ano do ensino médio e pretendo seguir carreira em <b className="font-bold text-brand-secondary">Engenharia de Software</b>. Sou formado em Almoxarifado e curso Operador de Suporte Técnico em TI, ambos pelo SENAI.</p>
            <p className="text-shadow-pop">Mais recentemente, me aventurei no universo de <b className="font-bold text-brand-secondary">IA</b> e desenvolvi o ecossistema TrackWay. Estou constantemente em busca de novos desafios que integrem software de ponta e sistemas embarcados, convertendo ideias inovadoras em soluções reais e de impacto.</p>
        </div>
    </motion.section>
);