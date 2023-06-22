"use client";

import Image from "next/image";

import { CarCard, CustomFilter, Hero, SearchBar, Showmore } from "@/components";
import { fetchCars } from "@/utils";
import { names, yearsOfProduction } from "@/constants";
import { useEffect, useState } from "react";

export default function Home() {
  const [allNutritions, setAllNutritions] = useState([]);
  const [loading, setLoading] = useState(false);
  // search states
  const [manufacturer, setManufacturer] = useState("");
  // const [model, setModel] = useState("");

  // filter states
  const [name, setName] = useState("");
  const [year, setYear] = useState(2022);

  // pagination states
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2022,
        name: name || "",
        limit: limit || 10,
        // model: model || "",
      });

      setAllNutritions(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [limit, manufacturer]);

  const isDataEmpty =
    !Array.isArray(allNutritions) || allNutritions.length < 1 || !allNutritions;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Nutrition Catalogue</h1>
          <p>Improve your strength</p>
        </div>
        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} />

          <div className="home__filter-container">
            <CustomFilter title="name" options={names} setFilter={setName} />
            <CustomFilter
              title="year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>

        {allNutritions.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allNutritions?.map((item) => (
                <CarCard car={item} />
              ))}
            </div>

            {loading && (
              <div className="mt-16 w-full flex-center">
                <Image
                  src="/loader.svg"
                  alt="loader"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            )}

            <Showmore
              pageNumber={limit / 10}
              isNext={limit > allNutritions.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl">No results</h2>
            {/* <p>{allNutritions?.message}</p> */}
          </div>
        )}
      </div>
    </main>
  );
}
