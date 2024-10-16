import React, { ReactNode, useState } from 'react';
import './Flashcard.css';

interface FlashcardProps {
  front: string;
  back: ReactNode; // Allows for any JSX or component
}

const Flashcard: React.FC<FlashcardProps> = ({ front, back }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="card-container" onClick={handleClick}>
      <div className={`card ${flipped ? 'flipped' : ''}`}>
        <div className="card-front">
          <div className="card-body">{front}</div>
        </div>
        <div className="card-back">
          <div className="card-body">{back}</div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
