import React from 'react';
import { Navigation } from '../../widgets/nav';
import '../../app/styles/fonts.css';

export const Contacts: React.FC = () => {
  return (
    <>
      <section id="contact" className="flex items-center justify-center h-screen w-screen">
        <div className="text-center text-white">
          <h2 className="text-2xl font-normal">Свободно пишите на одну из платформ:</h2>
          <ul className="mt-6 space-y-4">
            <li className="text-lg">
              Telegram: <a href="https://t.me/fencerror" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">@fencerror</a>
            </li>
            <li className="text-lg">
              VK: <a href="https://vk.com/stepan_orlow" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">vk.com/stepan_orlow</a>
            </li>
            <li className="text-lg">
              Email: <a href="mailto:tyghrtzwrcv@gmail.com" className="text-blue-500 hover:underline">tyghrtzwrcv@gmail.com</a>
            </li>
          </ul>
        </div>
      </section>
      <Navigation />
    </>
  );
};