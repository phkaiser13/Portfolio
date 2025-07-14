import React, { useState, useEffect } from 'react';
import { motion, useInView, animate, Variants } from 'framer-motion';
import { GitHubUser, GitHubRepo } from './types';

const AnimatedCounter = ({ value }: { value: number }) => {
    const [count, setCount] = useState(0);
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, value, {
                duration: 2.5,
                ease: "easeOut",
                onUpdate: (latest) => setCount(Math.round(latest)),
            });
            return () => controls.stop();
        }
    }, [isInView, value]);

    return <span ref={ref}>{count}</span>;
};

const statCardVariant: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', duration: 1, bounce: 0.3 } }
};

export const GitHubStats: React.FC<{ user: GitHubUser | null; repos: GitHubRepo[] }> = ({ user, repos }) => {
    const [languages, setLanguages] = useState<Record<string, number>>({});
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    useEffect(() => {
        if (repos.length > 0) {
            const langCount = repos
                .filter(repo => repo.language)
                .reduce((acc, repo) => {
                    acc[repo.language!] = (acc[repo.language!] || 0) + 1;
                    return acc;
                }, {} as Record<string, number>);

            const sortedLangs = Object.entries(langCount)
                .sort(([, a], [, b]) => b - a)
                .slice(0, 5)
                .reduce((obj, [key, val]) => ({ ...obj, [key]: val }), {} as Record<string, number>);

            setLanguages(sortedLangs);
        }
    }, [repos]);

    const totalLangs = Object.values(languages).reduce((sum, count) => sum + count, 0);

    return (
        <section ref={ref} className="py-24 px-4 container mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-100 section-title">Atividade no GitHub</h2>
            </div>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 text-white">
                <motion.div 
                    className="grid grid-cols-2 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ staggerChildren: 0.2 }}
                >
                    <motion.div variants={statCardVariant} className="glass-pane p-6 rounded-2xl text-center flex flex-col justify-center">
                        <div className="text-5xl md:text-7xl font-black text-brand-primary">
                            <AnimatedCounter value={user?.public_repos ?? 0} />
                        </div>
                        <div className="text-lg text-slate-400 mt-2">Repositórios</div>
                    </motion.div>
                     <motion.div variants={statCardVariant} className="glass-pane p-6 rounded-2xl text-center flex flex-col justify-center">
                        <div className="text-5xl md:text-7xl font-black text-brand-primary">
                            <AnimatedCounter value={user?.followers ?? 0} />
                        </div>
                        <div className="text-lg text-slate-400 mt-2">Seguidores</div>
                    </motion.div>
                </motion.div>
                 <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="glass-pane p-8 rounded-2xl animated-glowing-border"
                >
                    <h3 className="text-2xl font-bold mb-6 text-slate-200">Top Linguagens</h3>
                    <div className="space-y-4 font-mono">
                        {Object.keys(languages).length > 0 ? (
                            Object.entries(languages).map(([lang, count], i) => (
                                <motion.div 
                                    key={lang}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: i * 0.1 + 0.5, ease: 'easeOut' }}
                                >
                                    <div className="flex justify-between items-baseline mb-1 text-sm">
                                        <span className="text-slate-300">{lang}</span>
                                        <span className="text-slate-400">{count} projetos</span>
                                    </div>
                                    <div className="w-full bg-slate-700/50 rounded-full h-2.5">
                                        <motion.div
                                            className="stat-bar h-2.5 rounded-full"
                                            initial={{ width: 0 }}
                                            animate={isInView ? { width: totalLangs > 0 ? `${(count / totalLangs) * 100}%` : '0%' } : {}}
                                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                                        />
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <p className="text-slate-400">Calculando...</p>
                        )}
                    </div>
                 </motion.div>
            </div>
        </section>
    );
};