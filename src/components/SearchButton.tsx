"use client";

import Image from "next/image";

const SearchButton = () => {
  <button type="submit" className={`ml-3 z-10`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>;
};

export default SearchButton;
