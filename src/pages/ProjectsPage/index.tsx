import React from 'react';
import { Navigation } from '../../widgets/nav';
import TikTalkLogo from '../../assets/imgs/TikTalkLogo.svg';
import shoplogo from '../../assets/imgs/shoplogo.png';
import sitePictureLogo from '../../assets/imgs/site.svg';
import { AnimatedProjects } from './animatedProjects';



export const Projects: React.FC = () => {
  const projects = [
    {
      img: shoplogo,
      alt: 'shop picture',
      title: 'QPickShop',
      description: 'Интернет-магазин наушников со страницами каталога, корзины и оплаты.',
      link: 'https://fencerror.github.io/QPickShop/', 
    },
    {
      img: TikTalkLogo,
      alt: 'TikTalk',
      title: 'TikTalk',
      description: 'Социальная сеть "TikTalk", с переписками, поиском друзей и сообществами.',
      link: 'https://github.com/Fencerror/TikTalk',
      rotate: 'rotate(6deg)',
      zIndex: 6,
      opacity: 0.7,
    },
    {
      img: sitePictureLogo,
      alt: "website picture",
      title: 'WebSite',
      description: 'Мой персональный сайт, на котором вы прямо сейчас находитесь.',
      link: 'https://fencerror.github.io/',
      rotate: 'rotate(6deg)',
      zIndex: 6,
      opacity: 0.7,
    }
  ];

  return (
    <>
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Мои  учебные{' '}
        <span className="relative hover:bg-neutral-900 group/cover inline-block dark:bg-neutral-900 bg-neutral-100 px-2 py-2 transition duration-200 rounded-sm">
          <span className="dark:text-white inline-block text-neutral-900 relative z-20 group-hover/cover:text-white transition duration-200">
            проекты
          </span>
        </span>
      </h1>
      <AnimatedProjects projects={projects} />
      <Navigation />
    </>
  );
};

