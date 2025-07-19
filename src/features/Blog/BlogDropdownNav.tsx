import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, easeOut } from 'framer-motion';
import {
  fadeInUp,
  dropdownContentVariants,
  linkItemVariants,
  backgroundExpansionVariants
} from '../../shared/fadeIn/fadeInFunction';

export const BlogDropdownNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const blogTextSpanRef = useRef<HTMLSpanElement>(null);
  const dropdownContentInnerRef = useRef<HTMLDivElement>(null);
  const [fullHeight, setFullHeight] = useState('auto');
  const [blogTextTopOffset, setBlogTextTopOffset] = useState(0);
  const [blogTextHeight, setBlogTextHeight] = useState(0);
  const [dropdownContentHeight, setDropdownContentHeight] = useState(0);
  const [h1TotalHeight, setH1TotalHeight] = useState(0); // <-- Новое состояние для общей высоты h1

  const blogSections = [
    { path: "/blog/quotes", label: "Цитаты" },
    { path: "/blog/articles", label: "Заметки" },
    { path: "/blog/memes", label: "Мемы" },
  ];

  // Измеряем высоты и смещения один раз при монтировании
  useEffect(() => {
    if (dropdownRef.current && blogTextSpanRef.current) {
      const h1Element = dropdownRef.current.querySelector('h1') as HTMLElement | null;
      const blogTextSpan = blogTextSpanRef.current;

      if (h1Element && blogTextSpan) {
        // Высота всего h1 (включая padding)
        setH1TotalHeight(h1Element.offsetHeight);

        // Высота текста "Блог"
        setBlogTextHeight(blogTextSpan.offsetHeight);

        // Смещение текста "Блог" от верха h1 (равно padding-top h1)
        const offset = blogTextSpan.getBoundingClientRect().top - h1Element.getBoundingClientRect().top;
        setBlogTextTopOffset(offset);
      }
    }
  }, []);

  // Пересчитываем высоту выпадающего списка, когда он открывается/закрывается
  useEffect(() => {
    if (isOpen && dropdownContentInnerRef.current) {
      setDropdownContentHeight(dropdownContentInnerRef.current.offsetHeight);
    } else {
      setDropdownContentHeight(0);
    }
  }, [isOpen]);

  // Вычисляем общую высоту для фона при изменении состояния
  useEffect(() => {
    // Высота фона: общая высота h1 + высота выпадающего списка + небольшой запас
    const backgroundCalculatedHeight = h1TotalHeight + dropdownContentHeight + (isOpen ? 8 : 0);
    setFullHeight(`${backgroundCalculatedHeight}px`);
  }, [isOpen, h1TotalHeight, dropdownContentHeight]);


  // Вычисляем общую высоту для линии
  // Линия начинается от top-offset (padding-top h1) и покрывает текст Блог + выпадающий список
  const totalLineHeight = blogTextHeight + dropdownContentHeight;
  // Вертикальная позиция начала линии: padding-top от h1 до текста "Блог"
  const lineTopPosition = blogTextTopOffset;


  return (
    <div
      ref={dropdownRef}
      className="relative inline-block text-left group overflow-visible"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      style={{ '--full-height': fullHeight } as React.CSSProperties}
    >
      <motion.div
        className="absolute w-full h-full bg-neutral-100 dark:bg-neutral-900 rounded-md shadow-lg z-10 overflow-hidden"
        initial="initial"
        animate={isOpen ? "expanded" : "initial"}
        variants={backgroundExpansionVariants}
        transition={{ duration: 0.3, ease: easeOut }}
      ></motion.div>

      <motion.h1
        className="text-4xl md:text-4xl lg:text-6xl cursor-pointer font-semibold relative z-20 py-6 inline-flex items-center whitespace-nowrap"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        {/* Вертикальная линия */}
        <motion.span
          className="absolute left-0 w-[3px] bg-blue-500 rounded-full origin-top"
          style={{ top: lineTopPosition }}
          animate={{ height: isOpen ? `${totalLineHeight}px` : `${blogTextHeight}px` }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        ></motion.span>

        <span
          ref={blogTextSpanRef}
          className="text-gray-900 dark:text-white inline-block relative z-20 transition duration-200 group-hover:text-white pr-4 ml-4"
        >
          <Link to="/blog">Блог</Link>
        </span>
      </motion.h1>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute left-0 w-full z-20"
            style={{ top: h1TotalHeight }} // Используем h1TotalHeight для позиционирования списка
            variants={dropdownContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div ref={dropdownContentInnerRef} className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {blogSections.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-4 py-2 text-lg text-gray-900 dark:text-white hover:text-white hover:bg-blue-600 transition-colors duration-200 whitespace-nowrap"
                  role="menuitem"
                  onClick={() => setIsOpen(false)}
                >
                  <motion.div
                    variants={linkItemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.label}
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};