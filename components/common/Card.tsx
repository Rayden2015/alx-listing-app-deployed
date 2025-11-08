import { PropertyProps } from "@/interfaces";
import Pill from "./Pill";
import Image from "next/image";
import StarIcon from "@/public/assets/Star1.png";

const Card: React.FC<PropertyProps> = ({
  name,
  address,
  rating,
  category,
  price,
  offers,
  image,
}) => {
  return (
    <div className=" flex flex-col gap-4 bg-white text-black rounded-2xl p-4">
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-2xl"
        />
      </div>

      <div className="flex gap-2 flex-wrap">
        {category.map((categoryElement, index) => (
          <Pill key={index} title={categoryElement} />
        ))}
      </div>

      <div>
        <div className="flex justify-between">
          <h1 className="text-xl">{name}</h1>
          <div className="flex flex-wrap gap-2 justify-center items-center">
            <Image src={StarIcon} alt="star" className="w-4 h-4" />
            <p>{rating}</p>
          </div>
        </div>
        <p>
          {address.city && `${address.city}, `}
          {address.state && `${address.state}, `}
          {address.country}
        </p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 mt-2">
          <Pill image="/assets/bed1.png" title={offers.bed} />
          <Pill image="/assets/bathtub1.png" title={offers.shower} />
          <Pill image="/assets/Vector.png" title={offers.occupants} />
        </div>
        <h2 className="text-xl">{price}$</h2>
      </div>
    </div>
  );
};

export default Card;
