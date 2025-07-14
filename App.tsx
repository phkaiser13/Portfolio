import React, { useState, useEffect, useRef } from 'react';
import { GitHubUser, GitHubRepo } from './types';
import { Loader } from './Loader';
import { Hero } from './Hero';
import { About } from './About';
import { Projects } from './Projects';
import { GitHubStats } from './GitHubStats';
import { Footer } from './Footer';
import { DynamicBackground } from './DynamicBackground';

const GITHUB_USERNAME = 'phkaiser13';

export const App = () => {
    const [user, setUser] = useState<GitHubUser | null>(null);
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const appRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const [userRes, reposRes] = await Promise.all([
                    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
                    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`)
                ]);

                if (!userRes.ok || !reposRes.ok) {
                    throw new Error('Falha ao buscar dados do GitHub. A API pode estar indisponível.');
                }

                const userData: GitHubUser = await userRes.json();
                const reposData: GitHubRepo[] = await reposRes.json();
                
                setUser(userData);
                setRepos(reposData);

            } catch (err) {
                setError(err instanceof Error ? err.message : 'Ocorreu um erro desconhecido');
            } finally {
                setTimeout(() => setLoading(false), 1000);
            }
        };

        fetchData();
    }, []);
    
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (appRef.current) {
            const { clientX, clientY } = e;
            appRef.current.style.setProperty('--mouse-x', `${clientX}px`);
            appRef.current.style.setProperty('--mouse-y', `${clientY}px`);
        }
    };


    if (loading) return <Loader />;

    return (
        <div 
            className="bg-brand-dark text-white font-sans spotlight-container" 
            ref={appRef} 
            onMouseMove={handleMouseMove}
        >
            <DynamicBackground />
            <main className="relative z-10 isolate main-container">
                {error ? (
                     <div className="flex items-center justify-center h-screen text-center text-red-400 p-4">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Oops! Algo deu errado.</h2>
                            <p>{error}</p>
                        </div>
                    </div>
                ) : (
                    <>
                        <Hero user={user} />
                        <About />
                        <Projects />
                        <GitHubStats user={user} repos={repos} />
                    </>
                )}
            </main>
            <Footer />
        </div>
    );
};
