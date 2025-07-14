
import React from 'react';
import { motion } from 'framer-motion';

export const Loader = () => (
    <div className="flex items-center justify-center h-screen bg-brand-dark">
        <motion.div
            className="relative w-24 h-24"
            animate={{ rotate: 360 }}
            transition={{
                repeat: Infinity,
                repeatType: 'loop',
                ease: "linear",
                duration: 2
            }}
        >
            <motion.div
                className="absolute top-0 left-0 w-full h-full border-4 border-solid rounded-full"
                style={{ borderColor: 'transparent transparent #38BDF8 transparent' }}
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: "linear",
                    duration: 1.5,
                    delay: 0.2,
                }}
            />
            <motion.div
                className="absolute top-0 left-0 w-full h-full border-4 border-solid rounded-full"
                style={{ borderColor: 'transparent transparent #A78BFA transparent' }}
                animate={{ rotate: -360 }}
                transition={{
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: "linear",
                    duration: 1.2
                }}
            />
             <motion.div
                className="absolute top-0 left-0 w-full h-full border-4 border-solid rounded-full opacity-50"
                style={{ borderColor: '#E6EDF3 transparent transparent transparent' }}
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: "linear",
                    duration: 2.5
                }}
            />
        </motion.div>
    </div>
);