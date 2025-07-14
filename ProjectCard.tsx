import React from 'react';
import { motion, useMotionValue, useTransform, Variants } from 'framer-motion';

const cardVariants: Variants = {
    offscreen: { y: 50, opacity: 0, rotateX: -20 },
    onscreen: {
        y: 0,
        opacity: 1,
        rotateX: 0,
        transition: { type: "spring", bounce: 0.4, duration: 1 }
    }
};

export const ProjectCard: React.FC<{ name: string; description: string; tech?: string }> = ({ name, description, tech }) => {
    const cardRef = React.useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-150, 150], [15, -15]);
    const rotateY = useTransform(x, [-150, 150], [-15, 15]);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = cardRef.current?.getBoundingClientRect();
        if (rect) {
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            x.set(e.clientX - centerX);
            y.set(e.clientY - centerY);
        }
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };
    
    return (
        <motion.div
            ref={cardRef}
            variants={cardVariants}
            className="project-card-3d glass-pane p-6 rounded-2xl h-full flex flex-col"
            style={{
                perspective: '1000px',
                rotateX,
                rotateY,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }}>
                <h3 className="text-xl font-bold text-slate-100 text-shadow-pop">{name}</h3>
                {tech && <p className="text-sm font-mono text-brand-primary mt-1 mb-3">{tech}</p>}
                <p className="text-slate-400 flex-grow">{description}</p>
            </div>
        </motion.div>
    );
};