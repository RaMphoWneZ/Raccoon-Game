import React from 'react';
import { Share2 } from 'lucide-react';

interface ReferralSystemProps {
  referrals: number;
}

const ReferralSystem: React.FC<ReferralSystemProps> = ({ referrals }) => {
  const handleShare = () => {
    // Aquí se implementaría la lógica para compartir el enlace de referido
    alert('¡Comparte tu enlace de referido con amigos!');
  };

  return (
    <div>
      <button
        onClick={handleShare}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
      >
        <Share2 size={20} className="inline mr-2" />
        Referir (Total: {referrals})
      </button>
    </div>
  );
};

export default ReferralSystem;