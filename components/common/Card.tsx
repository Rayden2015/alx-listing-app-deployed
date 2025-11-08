import Image from "next/image";
import React from "react";

export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => (
  <div className="border rounded shadow p-4">
    <div className="relative h-48 w-full overflow-hidden rounded">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 33vw, 100vw"
      />
    </div>
    <h3 className="mt-2 text-lg font-semibold">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Card;