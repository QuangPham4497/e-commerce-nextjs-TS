"use client";

import { NutritionProps } from "@/types";
import Image from "next/image";
import { CarDetails, CustomButton } from "./";

import { useState } from "react";
import { calculateCarRent } from "@/utils";

interface NutritionCardProps {
  car: NutritionProps;
}

const CarCard = ({ car }: NutritionCardProps) => {
  const {
    name,
    calories,
    serving_size_g,
    fat_total_g,
    fat_saturated_g,
    protein_g,
    sodium_mg,
    potassium_mg,
    cholesterol_mg,
    carbohydrates_total_g,
    fiber_g,
    sugar_g,
  } = car;

  const [isOpen, setIsOpen] = useState(false);

  // const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">{name}</h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {calories}
        <span className="self-end text-[14px] font-medium">/serving</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/nutrition.jpg"
          alt="nutrition"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible  w-full justify-between text-gray-2">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/logo-like.svg" width={20} height={20} alt="" />
            <p className="text-[14px]">
              {serving_size_g === 100 ? "good " : "very good"}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/logo-fat.png" width={20} height={20} alt="" />
            <p className="text-[14px]">{fat_total_g}</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/logo-protein.png" width={20} height={20} alt="" />
            <p className="text-[14px]">{protein_g} </p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="View more"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
