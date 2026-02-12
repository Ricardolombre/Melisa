"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface ValentineEnvelopeProps {
  onOpen: () => void;
  isOpen: boolean;
  children: React.ReactNode;
}

const ValentineEnvelope: React.FC<ValentineEnvelopeProps> = ({ onOpen, isOpen, children }) => {
  return (
    <div className="relative flex items-center justify-center w-full h-[500px]">
      <div 
        className="relative cursor-pointer" 
        onClick={!isOpen ? onOpen : undefined}
      >
        {/* Envelope Back */}
        <div className="relative w-80 h-56 bg-rose-200 rounded-lg shadow-xl">
          
          {/* The Card (Inside) */}
          <motion.div
            initial={{ y: 0, opacity: 0, scale: 0.8 }}
            animate={isOpen ? { 
              y: -250, 
              opacity: 1, 
              scale: 1,
              zIndex: 50 
            } : { 
              y: 0, 
              opacity: 0, 
              scale: 0.8,
              zIndex: 5
            }}
            transition={{ 
              delay: 0.5, 
              duration: 1, 
              type: "spring", 
              stiffness: 50 
            }}
            className="absolute inset-0 flex items-center justify-center pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>

          {/* Flap (Top) */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-rose-300 rounded-t-lg origin-top z-40"
            initial={false}
            animate={isOpen ? { rotateX: 160 } : { rotateX: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ 
              clipPath: 'polygon(0 0, 50% 50%, 100% 0)',
              backfaceVisibility: 'hidden'
            }}
          />

          {/* Envelope Front (The Pocket) */}
          <div 
            className="absolute inset-0 bg-rose-100 rounded-lg z-30 shadow-inner" 
            style={{ clipPath: 'polygon(0 0, 50% 50%, 100% 0, 100% 100%, 0 100%)' }} 
          />

          {/* Heart Seal */}
          {!isOpen && (
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 text-rose-500"
              whileHover={{ scale: 1.2 }}
            >
              <Heart fill="currentColor" size={48} />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-rose-400 font-serif italic text-sm">
                Clique pour ouvrir...
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ValentineEnvelope;