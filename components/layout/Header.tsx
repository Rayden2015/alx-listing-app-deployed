import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header: React.FC = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", query);
    // You could route, filter data, etc.
  };
  return (
    <>
      <div className="flex justify-between items-center bg-white text-black px-12 py-2">
        <Image
          src="/assets/next.svg"
          alt="Header banner"
          width={60}
          height={30}
        />
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="px-4 py-2 border rounded"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Search
          </button>
        </form>
        <div className="flex gap-4">
          <Link href="/SignUpPage">Sign Up</Link>
          <Link href="/SignInPage">Sign In</Link>
        </div>
      </div>
      <div className="flex justify-between bg-blue-600 text-white px-4 py-2">
        <Link href="/rooms">Rooms</Link>
        <Link href="/mansion">Mansion</Link>
        <Link href="/countryside">Countryside</Link>
        <Link href="/beachfront">Beachfront</Link>
        <Link href="/forest">Forest</Link>
        <Link href="/mountains">Mountains</Link>
        <Link href="/desert">Desert</Link>
        <Link href="/islands">Islands</Link>
      </div>
    </>
  );
};

export default Header;
