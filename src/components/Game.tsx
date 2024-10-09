import React from 'react';

interface GameProps {
  onPush: () => void;
}

const Game: React.FC<GameProps> = ({ onPush }) => {
  return (
    <div className="text-center">
      <button
        onClick={onPush}
        className="bg-transparent hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
      >
        <img src="/raccoon.png" alt="Raccoon" className="w-32 h-32" />
      </button>
    </div>
  );
};

export default Game;