import React from "react";
import { motion, AnimatePresence } from 'framer-motion';

interface ArticleModalProps {
  title: string;
  content: string;
  onClose: () => void;
}

const modalBackdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalContentVariants = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "0", opacity: 1, transition: { delay: 0.1 } },
  exit: { y: "100vh", opacity: 0 }
};

export const ArticleModal: React.FC<ArticleModalProps> = ({ title, content, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
        variants={modalBackdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
      >
        <motion.div
          className="bg-gray-900 rounded-xl shadow-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative border border-gray-700"
          variants={modalContentVariants}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl font-bold leading-none focus:outline-none"
            onClick={onClose}
          >
            &times;
          </button>
          <h2 className="text-4xl font-bold text-white mb-6 text-center">{title}</h2>
          <div className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
            {content}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};