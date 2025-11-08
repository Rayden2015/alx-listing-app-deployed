import Pill from "@/components/common/Pill";
import Card from "@/components/common/Card";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

export default function index() {
  const pills = [
    "Top Villa",
    "Self Checkin",
    "Free Reschudle",
    "Instant book",
    "Book Now, Pay Later",
  ];
  const propertyLinstings = PROPERTYLISTINGSAMPLE;
  return (
    <>
      <section className="bg-[url('/assets/Image1.png')] bg-cover bg-center rounded-4xl text-black py-20 px-4 text-center mb-7">
        <h1 className="text-4xl font-bold mb-4">
          Find your favorite place here!
        </h1>
        <h2 className="text-xl">
          The best prices for over 2 million properties worldwide.
        </h2>
      </section>
      <section className="flex justify-between bg-white rounded-4xl text-white">
        {pills.map((pill, index) => (
          <Pill key={index} title={pill} />
        ))}
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 space-y-3 my-12">
        {propertyLinstings.map((property, index) => (
          <Card key={index} {...property} />
        ))}
      </section>
    </>
  );
}
