import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import me from "../../assets/imgs/me.jpg";
import { MemesSection } from './memes';
import { QuotesSection } from './quotes';
import { ArticlesSection } from './articles';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Navigation } from '../../widgets/nav';
import { fadeInUp, fadeInLeft, containerVariants, fadeInRight } from '../../shared/fadeIn/fadeInFunction';
import { BlogDropdownNav } from '../../features/Blog/BlogDropdownNav';

export const Blog: React.FC = () => {
  const location = useLocation();
  const isNestedRoute = location.pathname !== '/blog';

  useEffect(() => {
    if (location.pathname.startsWith('/blog')) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  if (isNestedRoute) {
    return (
      <>
        <section
          id="blog"
          className="min-h-screen bg-black p-8 text-white"
        >
          <header className="mb-8 text-center sticky top-0 z-40 py-4 bg-black">
            <div className="inline-flex items-center max-w-fit mx-auto whitespace-nowrap">
              <BlogDropdownNav />
              <motion.span
                className="text-4xl md:text-4xl lg:text-6xl font-semibold ml-4 py-6 text-white"
                initial="hidden"
                transition={{ delay: 0.8 }}
              >
                – давайте знакомиться!
              </motion.span>
            </div>
          </header>

          <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
          <Navigation />
        </section>
        <div className='h-8 p-18'> </div>
      </>
    );
  }

  return (
    <>
      <section
        id="blog"
        className="min-h-screen bg-black text-white"
      >
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <header className="mb-8 text-center sticky top-0 z-40 py-4 bg-black">
            <div className="inline-flex items-center max-w-fit mx-auto whitespace-nowrap">
              <BlogDropdownNav />
              <motion.span
                className="text-4xl md:text-4xl lg:text-6xl font-semibold ml-4 py-6 text-white "
                initial="hidden"
                transition={{ delay: 0.8 }}
              >
                 – давайте знакомиться!
              </motion.span>
            </div>
          </header>

          <motion.section
            className="flex flex-col md:flex-row items-center justify-center mb-16 gap-12 bg-gray-900 p-8 md:p-12 rounded-2xl shadow-xl border border-gray-700"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="md:w-2/3 text-center md:text-left" variants={fadeInRight}>
              <motion.h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500" variants={fadeInUp}>
                Добро пожаловать!
              </motion.h2>
              <motion.p className="text-lg text-gray-300 leading-relaxed" variants={fadeInUp}>
                Привет! Я рад видеть вас здесь. Этот блог — место, где я делюсь своими мыслями, идеями, интересными цитатами и полезными заметками. Надеюсь, вы найдете здесь что-то интересное и для себя.
              </motion.p>
            </motion.div>
            <motion.div className="md:w-1/3 flex justify-center" variants={fadeInLeft}>
              <img
                src={me}
                alt="Me"
                className="border-4 border-orange-500 w-64 h-64 md:w-72 md:h-72 object-cover rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </motion.section>

          <section className="mb-16">
            <motion.h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500" variants={fadeInUp} initial="hidden" animate="visible">
              Последние Заметки
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
            >
              <ArticlesSection previewCount={3} />
            </motion.div>
            <motion.div
              className="mt-8 flex justify-end"
              variants={fadeInLeft}
              initial="hidden"
              animate="visible"
            >
              <Link to="/blog/articles" className="inline-block px-5 py-2.5 text-lg bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md btn-more">
                Больше заметок
              </Link>
            </motion.div>
          </section>

          <section className="mb-16">
            <motion.h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500" variants={fadeInUp} initial="hidden" animate="visible">
              Вдохновляющие Цитаты
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
            >
              <QuotesSection previewCount={3} />
            </motion.div>
            <motion.div
              className="mt-8 flex justify-end"
              variants={fadeInLeft}
              initial="hidden"
              animate="visible"
            >
              <Link to="/blog/quotes" className="inline-block px-5 py-2.5 text-lg bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md btn-more">
                Больше цитат
              </Link>
            </motion.div>
          </section>

          <section className="mb-16">
            <motion.h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500" variants={fadeInUp} initial="hidden" animate="visible">
              Свежие Мемы
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
            >
              <MemesSection previewCount={3} />
            </motion.div>
            <motion.div
              className="mt-8 flex justify-end"
              variants={fadeInLeft}
              initial="hidden"
              animate="visible"
            >
              <Link to="/blog/memes" className="inline-block px-5 py-2.5 text-lg bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md btn-more">
                Больше мемов
              </Link>
            </motion.div>
          </section>
        </div>
      </section>

      <Navigation />
    </>
  );
};