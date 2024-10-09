import React from 'react';
import { Home, Gift, Users } from 'lucide-react';

interface BottomNavigationProps {
  balance: number;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ balance }) => {
  return (
    <div className="bg-[#17212b] p-4 flex justify-around">
      <button className="text-[#5ebbf8] flex flex-col items-center">
        <Home size={24} />
        <span className="mt-1 text-xs">Home</span>
      </button>
      <button className="text-[#8e9ba8] flex flex-col items-center">
        <Gift size={24} />
        <span className="mt-1 text-xs">Balance: ${balance}</span>
      </button>
      <button className="text-[#8e9ba8] flex flex-col items-center">
        <Users size={24} />
        <span className="mt-1 text-xs">Friends</span>
      </button>
    </div>
  );
};

export default BottomNavigation;