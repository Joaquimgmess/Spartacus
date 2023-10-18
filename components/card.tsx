import React from 'react';

interface CardProps {
  name: string;
  address: string;
  resume: string;
}

const Card: React.FC<CardProps> = ({ name, address, resume }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md p-4 mx-2 w-64 justify-center">
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p className="text-gray-800 mb-2">{address}</p>
      <p className="text-gray-600">{resume}</p>
    </div>
  );
};

export default Card;
