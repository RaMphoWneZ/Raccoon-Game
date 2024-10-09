import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Game from './components/Game';
import UserProfile from './components/UserProfile';
import BottomNavigation from './components/BottomNavigation';

function App() {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [balance, setBalance] = useState(100);

  useEffect(() => {
    setScore(250);
    setLevel(1);
    setBalance(100);
  }, []);

  const handlePush = () => {
    setScore(prevScore => prevScore + 1);
    setBalance(prevBalance => prevBalance + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 text-white flex flex-col" style={{backgroundImage: "url('/background1.png')"}}>
      <div className="flex justify-between items-center p-4 bg-[#17212b]">
        <ChevronLeft size={24} />
        <h1 className="text-lg font-semibold">Game (HomeScreen) LVL {level}</h1>
        <ChevronRight size={24} className="invisible" />
      </div>
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <UserProfile score={score} />
        <Game onPush={handlePush} />
      </div>
      <BottomNavigation balance={balance} />
    </div>
  );
}

export default App;
