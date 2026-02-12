"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

interface ValentineCardProps {
  isAccepted: boolean;
}

const ValentineCard: React.FC<ValentineCardProps> = ({ isAccepted }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-xl border border-rose-100 p-5 text-center relative overflow-hidden min-h-[200px] flex flex-col items-center justify-center"
      layout
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

      <AnimatePresence mode="wait">
        {!isAccepted ? (
          <motion.div
            key="question"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden border-4 border-rose-50 shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=500&auto=format&fit=crop" 
                alt="Toi et Moi"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-1">
              <h2 className="text-xl font-serif text-rose-600 font-bold">
                Ma Valentine...
              </h2>
              <p className="text-rose-800 font-bold">
                Veux-tu être ma Valentine ?
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="py-4 space-y-4"
          >
            <div className="flex justify-center">
              <Heart className="text-rose-500 animate-pulse" size={64} fill="currentColor" />
            </div>
            <div className="space-y-1">
              <h2 className="text-3xl font-serif text-rose-600 font-bold">
                Merveilleux !
              </h2>
              <p className="text-rose-500 font-medium">
                Je t'aime. ❤️
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ValentineCard;