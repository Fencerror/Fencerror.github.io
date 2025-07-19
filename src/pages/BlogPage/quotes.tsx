import React from "react";
import { QuoteCard } from "../../widgets/quotes/quotes";
import {motion} from 'framer-motion';
import { fadeInUp, containerVariants } from '../../shared/fadeIn/fadeInFunction';

export const QuotesSection: React.FC<{ previewCount?: number }> = ({ previewCount }) => {

  const quotes = [
    { id: 1, text: "Скептицизм это отбрасывание возможностей" },
    { id: 2, text: "Что такое зло? Все, что проистекает из слабости.", author: 'Ницше' },
    { id: 3, text: "Люди, которым всегда некогда, обыкновенно ничего не делают." },
    { id: 4, text: "Что разум человека может постигнуть и во что он может поверить, того он способен достичь.", author: 'Наполеон Хилл'},
    { id: 5, text: "Счастье любит тишину."},
    { id: 9, text: "Вообще бездеятельность можно рассматривать как своего рода добровольное умирание."},
    { id: 10, text: "Не говори гоп, пока не перепрыгнешь"},

  ];
  const showQuotes = previewCount ? quotes.slice(0, previewCount) : quotes;
  return (
    <>
    <motion.p className="text-base text-gray-400 mb-2" variants={fadeInUp}>
      
    </motion.p >

    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="space-y-8">
          {showQuotes.map(q => (
            <motion.div key={q.id} variants={fadeInUp} initial="hidden" whileInView="visible">
              <QuoteCard text={q.text} author={q.author} />
            </motion.div>
          ))}
      </div>
    </motion.div>
      </>
  );
};
