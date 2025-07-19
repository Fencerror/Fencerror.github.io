import React, { useState, useEffect } from 'react';
import { Navigation } from '../../widgets/nav';
import { motion } from 'framer-motion';
import {BackgroundLines }  from '../../shared/ui/particles'


const AnimatedWord: React.FC<{ word: string }> = ({ word }) => {
  const letters = word.split('');
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    },
  };
  const letterVariants = {
    hidden: { opacity: 0, y: '0.25em' },
    visible: { opacity: 1, y: '0em' },
  };
  return (
    <motion.span 
      variants={containerVariants} 
      initial="hidden" 
      animate="visible" 
      className="inline-block"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={letterVariants}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export const Home: React.FC = () => {
  const words = ['Орлов Степан', 'Прогер', 'Фронтенд разработчик', 'Студент'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length); 
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <>
      <div className="fixed inset-0 z-0">
        <BackgroundLines />
      </div>
      <div className="relative z-10">
        <div>
          <section
            id="home"
            className="relative h-screen flex items-center justify-center bg-black/30 text-white overflow-hidden"
          >
            <div className="text-center flex flex-col items-center justify-center h-full">
              <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-sans py-2 sm:py-4 md:py-8 lg:py-10 relative z-20 font-bold tracking-tight">
                Hello World,
                <br />
                Я {' '}
                <span className="text-white">
                  <AnimatedWord key={words[currentWordIndex]} word={words[currentWordIndex]} />
                </span>
              </h2>
              <p className="max-w-lg sm:max-w-xl mx-auto text-xs sm:text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center pb-2 sm:pb-4 md:pb-6">
                Веб-Разработчик, специализирующийся на фронтенд разработке.
                Люблю создавать привлекательные и эстетичные интерфейсы.
              </p>
              <a
                target="_blank"
                className="relative z-50 bg-white dark:bg-white rounded-full text-black px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 mt-4 sm:mt-6 lg:mt-20 border-2 border-black hover:underline"
                href="https://drive.google.com/file/d/1iXobVI_iSa9HiK_WZQDOBy4BlYNXEUSX/view?usp=sharing"
              >
                Резюме
              </a>
            </div>
          </section>
          <Navigation />
        </div>
      </div>
    </>
  );
};


