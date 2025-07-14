import React from 'react';
import { motion, Variants } from 'framer-motion';
import { GitHubUser } from './types';
import { FaGithub, FaLinkedin } from 'react-icons-fa';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const Hero: React.FC<{ user: GitHubUser | null }> = ({ user }) => (
    <motion.section 
        className="min-h-screen flex items-center justify-center text-center p-4 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
    >
        <div className="z-10 flex flex-col items-center">
            {user?.avatar_url && (
                <motion.div variants={itemVariants} className="relative mb-8">
                    <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full blur-2xl opacity-75 animate-pulse" />
                    <motion.img 
                        src={user.avatar_url} 
                        alt={user.name || 'Avatar'}
                        className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-slate-800 shadow-2xl animate-float"
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    />
                </motion.div>
            )}

            <motion.h1 
                className="text-4xl md:text-7xl font-black tracking-tighter animated-gradient-text"
                variants={itemVariants}
            >
                {user?.name || 'Pedro Henrique Garcia'}
            </motion.h1>

            <motion.p 
                className="mt-4 text-lg md:text-2xl text-brand-primary font-mono tracking-wide"
                variants={itemVariants}
            >
                Software Innovator & Systems Architect
            </motion.p>

            <motion.div variants={itemVariants} className="flex mt-8 space-x-4">
                <motion.a 
                    href={user?.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="GitHub" 
                    className="social-link"
                    whileHover={{}} // Handled by CSS
                    whileTap={{ scale: 0.9 }}
                >
                    <FaGithub className="w-7 h-7" />
                </motion.a>
                <motion.a 
                    href="https://www.linkedin.com/in/phgarcia13/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="LinkedIn" 
                    className="social-link"
                    whileHover={{}} // Handled by CSS
                    whileTap={{ scale: 0.9 }}
                >
                    <FaLinkedin className="w-7 h-7" />
                </motion.a>
            </motion.div>
        </div>
    </motion.section>
);