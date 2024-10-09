import React from 'react';
import { Rocket } from 'lucide-react';

interface BoosterShopProps {
  boosters: number;
  onUseBooster: () => void;
}

const BoosterShop: React.FC<BoosterShopProps> = ({ boosters, onUseBooster }) => {
  return (
    <div>
      <button
        onClick={onUseBooster}
        disabled={boosters === 0}
        className={`bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out ${
          boosters === 0 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        <Rocket size={20} className="inline mr-2" />
        Usar Booster ({boosters})
      </button>
    </div>
  );
};

export default BoosterShop;