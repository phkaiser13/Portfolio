import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

const projects = {
    ecosystem: [
        { name: "VersEia", description: "Um ERP completo para empresas, com módulos de finanças, vendas, estoque, produção e RH." },
        { name: "Loria", description: "Plataforma de gestão de pessoas focada em processos de RH." },
        { name: "Storia", description: "Sistema de logística e almoxarifado ideal para pequenas e médias empresas." },
    ],
    trackie: [
        { name: "TrackieLLM", tech: "C/C++, Rust, Python, Assembly", description: "Motor de LLM Offiline para processamento de IA local." },
        { name: "TrackieIntelligence", tech: "Python, C++, Cython", description: "Camada de inteligência via API para o ecossistema." },
        { name: "SpotWay", tech: "ESP32, Sensores", description: "Módulo robótico para coleta de dados em campo." },
        { name: "RaspWay", tech: "Orange Pi", description: "Versão embarcada do sistema, atualmente baseada em Orange Pi." },
        { name: "TrackWay App", tech: "C# (iOS/Android)", description: "Aplicativo móvel para gerenciamento e interação." },
        { name: "Trackie Studio", tech: "C++/Qt", description: "Suíte desktop para configuração e análise avançada." },
        { name: "TrackieOS", tech: "Arch-based Linux", description: "Sistema operacional leve e otimizado para executar o Trackie." },
    ]
};

const containerVariants = {
    offscreen: { opacity: 1 },
    onscreen: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        }
    }
};

export const Projects: React.FC = () => (
    <motion.section 
        className="py-24 px-4 container mx-auto"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
    >
        <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-100 section-title">Projetos & Ecossistema TrackWay</h2>
            <p className="text-center text-slate-400 mt-12 max-w-2xl mx-auto">Como idealizador do Trackie, desenhei toda a stack — desde o motor de LLM Offiline até os módulos robóticos e o app móvel.</p>
        </div>
        
        <div className="mb-20">
            <h3 className="text-3xl font-bold text-center text-slate-200 mb-10 text-shadow-pop">Componentes Principais do Trackie</h3>
            <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
            >
                {projects.trackie.map(p => <ProjectCard key={p.name} {...p} />)}
            </motion.div>
        </div>

        <div>
            <h3 className="text-3xl font-bold text-center text-slate-200 mb-10 text-shadow-pop">Soluções de Negócio</h3>
            <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
            >
                {projects.ecosystem.map(p => <ProjectCard key={p.name} {...p} />)}
            </motion.div>
        </div>
        
        <motion.div 
            className="text-center mt-24 glass-pane p-8 md:p-12 rounded-2xl max-w-3xl mx-auto animated-glowing-border"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
        >
             <h3 className="text-3xl font-bold text-white text-shadow-pop">Vytruve.org</h3>
             <p className="text-slate-400 mt-2">A marca que criei para lançar e distribuir minhas aplicações, com a visão de transformá-la em uma startup.</p>
             <div className="flex justify-center flex-wrap gap-x-8 gap-y-2 mt-6">
                <a href="#" className="font-mono text-brand-primary hover:text-white transition-colors">TruveSoftware</a>
                <a href="#" className="font-mono text-brand-primary hover:text-white transition-colors">Vy-AI</a>
             </div>
        </motion.div>
    </motion.section>
);