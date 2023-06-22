"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useState } from "react";

import { SearchManufacturer } from "./";

const SearchBar = ({ setManufacturer }) => {
  const [searchManufacturer, setSearchManufacturer] = useState("");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufacturer === "") {
      return alert("PLease fill in search bar");
    }

    setManufacturer(searchManufacturer);
  };

  // const updateSearchParams = (model: string, manufacturer: string) => {
  //   const searchParams = new URLSearchParams(window.location.search);

  //   if (model) {
  //     searchParams.set("model", model);
  //   } else {
  //     searchParams.delete("model");
  //   }

  //   if (manufacturer) {
  //     searchParams.set("manufacturer", manufacturer);
  //   } else {
  //     searchParams.delete("manufacturer");
  //   }

  //   const newPathname = `${
  //     window.location.pathname
  //   }?${searchParams.toString()}`;

  //   router.push(newPathname);
  // };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
      </div>
      <button type="submit">
        <Image
          src="/magnifying-glass.svg"
          alt="magnifying glass"
          width={40}
          height={40}
          className="object-contain"
        />
      </button>

      {/* <div className="search__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />

      </div> */}
      {/* <SearchButton otherClasses="max-sm:hidden" /> */}
    </form>
  );
};

export default SearchBar;
