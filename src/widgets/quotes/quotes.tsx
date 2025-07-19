import React from "react";
import "./quotes.css";

interface QuoteCardProps {
  text: string;
  author?: string;
}

export const QuoteCard: React.FC<QuoteCardProps> = ({text, author}) => {
  const displayAuthor = author || "Автор неизвестен";
  return (
  <blockquote>
    <p>{text}</p>
    <footer>— <cite>{displayAuthor}</cite></footer>
    </blockquote>
  )
}