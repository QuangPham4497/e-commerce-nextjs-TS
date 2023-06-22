import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface NutritionProps {
  // city_mpg: number;
  // class: string;
  // combination_mpg: number;
  // cylinders: number;
  // displacement: number;
  // drive: string;
  // fuel_type: string;
  // highway_mpg: number;
  // make: string;
  // model: string;
  // transmission: string;
  // year: number;
  name: string;
  calories: number;
  serving_size_g: number;
  fat_total_g: number;
  fat_saturated_g: number;
  protein_g: number;
  sodium_mg: number;
  potassium_mg: number;
  cholesterol_mg: number;
  carbohydrates_total_g: number;
  fiber_g: number;
  sugar_g: number;
}

export interface FilterProps {
  manufacturer?: string;
  year: number;
  // fuel: string;
  limit?: number;
  // model: string;
  name?: string;
  calories?: number;
  protein_g?: number;
  cholesterol_mg?: number;
}

export interface OptionsProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionsProps[];
  setFilter: () => void;
}

export interface ShowmoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit: () => void;
}
