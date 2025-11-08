import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white text-black border-top px-12 py-4 gap-10">
        <div>
          <Image
            src="/assets/next.svg"
            alt="Footer banner"
            width={60}
            height={70}
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem esse
            sapiente fugit nobis, quae fuga repellendus sit aliquam, corporis,
            odit ipsa porro. Minus dicta praesentium obcaecati, autem vero
            reiciendis unde.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          <div className="flex flex-col gap-2">
            <Link href="/rooms">Rooms</Link>
            <Link href="/mansion">Mansion</Link>
            <Link href="/countryside">Countryside</Link>
            <Link href="/beachfront">Beachfront</Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link href="/forest">Forest</Link>
            <Link href="/mountains">Mountains</Link>
            <Link href="/desert">Desert</Link>
            <Link href="/islands">Islands</Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link href="/forest">Forest</Link>
            <Link href="/mountains">Mountains</Link>
            <Link href="/desert">Desert</Link>
            <Link href="/islands">Islands</Link>
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center  bg-white text-black  px-12 py-4">
        <p>&copy; 2023 Your Company</p>
      </div>
    </>
  );
}
