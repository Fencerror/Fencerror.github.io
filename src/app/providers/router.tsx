import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Home } from '../../pages/HomePage';
import { Blog } from '../../pages/BlogPage';
import { Projects } from '../../pages/ProjectsPage'; 
import { Contacts } from '../../pages/ContactsPage';
import { ArticlesSection } from '../../pages/BlogPage/articles';
import { MemesSection } from '../../pages/BlogPage/memes';
import { QuotesSection } from '../../pages/BlogPage/quotes';

export const RouterProvider: React.FC = () => {
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '/projects', element: <Projects /> },
    { 
      path: '/blog', 
      element: <Blog />,
      children: [
      {
        path: 'articles',
        element: <ArticlesSection />
      },
      {
        path: 'memes',
        element: <MemesSection/>
      },
      {
        path: 'quotes',
        element: <QuotesSection />
      }
      ]
    },
    { path: '/contacts', element: <Contacts /> },
  ]) || null;
};
