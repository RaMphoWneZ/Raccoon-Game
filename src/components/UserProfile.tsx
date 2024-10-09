import React from 'react';

interface UserProfileProps {
  score: number;
}

const UserProfile: React.FC<UserProfileProps> = ({ score }) => {
  return (
    <div className="w-full max-w-md bg-[#17212b] rounded-lg overflow-hidden mb-6">
      <div className="p-4 flex items-center">
        <img src="/raccoon.png" alt="Raccoon" className="w-16 h-16 rounded-full mr-4" />
        <div>
          <h2 className="text-xl font-semibold">User01</h2>
          <p className="text-[#8e9ba8]">{score} highscore/hora</p>
        </div>
      </div>
      <div className="bg-[#232e3c] p-4 flex justify-between">
        <button className="text-[#5ebbf8] font-semibold">Previous</button>
        <button className="text-[#5ebbf8] font-semibold">Balance</button>
        <button className="text-[#5ebbf8] font-semibold">Friends</button>
      </div>
    </div>
  );
};

export default UserProfile;