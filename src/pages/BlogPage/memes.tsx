import React from "react";
import { MemeWidget } from "../../widgets/memes";
import {motion} from 'framer-motion'
import { fadeInUp, containerVariants } from "../../shared/fadeIn/fadeInFunction";

export const MemesSection: React.FC<{ previewCount?: number }> = ({ previewCount }) => {
  const memes = [
    { id: 1, img: "/src/assets/imgs/memes1.jpg", alt: "Мем 1", text: ")))", },
    { id: 2, img: "/src/assets/imgs/memes2.jpg", alt: "Мем 2", text: 'Это буквально заметка 2 – "Делегирование принятия решений"' },
  ];
  const showMemes = previewCount ? memes.slice(0, previewCount) : memes;
  
  return (
     <>
    <motion.p className="text-base text-gray-400 mb-2" variants={fadeInUp}>
      
    </motion.p >

    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex gap-16 flex-wrap flex-col justify-center items-center">
          {showMemes.map(meme => (
            <motion.div key={meme.id} variants={fadeInUp}>
              <MemeWidget key={meme.id} img={meme.img} alt={meme.alt} text={meme.text} />
            </motion.div>
          ))}
      </div>
    </motion.div>
    </>
  );
};
