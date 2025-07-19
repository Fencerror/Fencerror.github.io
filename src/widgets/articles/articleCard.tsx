import React from "react";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  onClick: () => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ title, excerpt, onClick }) => {
  return (
    <div
      className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 cursor-pointer hover:bg-gray-700 transition-colors duration-200 h-80 flex flex-col justify-between"
      onClick={onClick}
    >
      <div>
        <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-base overflow-hidden text-ellipsis h-32">{excerpt}</p>
      </div>
    </div>
  );
};