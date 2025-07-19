import React from 'react';

interface MemeWidgetProps {
  img: string;
  alt: string;
  text?: string;
  date?: string;
}

export const MemeWidget: React.FC<MemeWidgetProps> = ({ img, alt, text, date }) => {
  return (
    <div className="w-full max-w-md bg-black rounded-2xl shadow-lg overflow-hidden border border-gray-700 hover:scale-105 transition-transform duration-300">
      <img src={img} alt={alt} className="w-full object-cover rounded-t-2xl" />

      <div className="p-6 flex flex-col gap-4">
        {text && (
          <p className="text-white text-lg text-center font-semibold tracking-wide">
            {text}
          </p>
        )}
        {date && (
          <p className="text-gray-400 text-sm text-right italic">
            Опубликовано: {date}
          </p>
        )}
      </div>
    </div>
  );
};
