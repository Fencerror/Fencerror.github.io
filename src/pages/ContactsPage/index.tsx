import React from 'react';
import { Navigation } from '../../widgets/nav';
import '../../app/styles/fonts.css';
import './style.css'; 
export const Contacts: React.FC = () => {
  return (
    <>
      <section id="contact"> 
        <div className="text-center text-white">
          <h2 className="text-2xl  font-400 ">Свободно пишите на одну из платформ:</h2>
          <ul className="mt-6 space-y-4">
            <li className="text-lg">
              Telegram: <a href="https://t.me/fencerror" target="_blank" rel="noopener noreferrer" className="text-blue-500">@fencerror</a>
            </li>
            <li className="text-lg">
              VK: <a href="https://vk.com/stepan_orlow" target="_blank" rel="noopener noreferrer" className="text-blue-500">vk.com/stepan_orlow</a>
            </li>
            <li className="text-lg">
              Email: <a href="mailto:tyghrtzwrcv@gmail.com" className="text-blue-500">tyghrtzwrcv@gmail.com</a>
            </li>
          </ul>
        </div>
      </section>
      <Navigation />
    </>
  );
};

