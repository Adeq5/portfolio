// FAQ.tsx
import React, { useState } from "react";
import styles from "./Faq.module.css";
interface FAQItemProps {
  question: string;
  answer: string;
  isActive: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isActive,
  onClick,
}) => {
  return (
    <div className={styles.item}>
      <div className={styles.question} onClick={onClick}>
        <span>{question}</span>
        <button className={styles.toggleButton}>{isActive ? "-" : "+"}</button>
      </div>
      <div
        className={styles.answerContainer}
        style={{
          maxHeight: isActive ? "500px" : "0px", // Smooth height animation
          opacity: isActive ? 1 : 0,
        }}
      >
        <p className={styles.answer}>{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;

interface FAQProps {
  items: { question: string; answer: string }[];
}

export const FAQ: React.FC<FAQProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle active item
  };

  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isActive={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};
