"use client";

import Image from "next/image";
import filterLogo from "../assets/icons/filter 05.svg";
import { useState } from "react";

interface CategoryFilter {
  label: string;
  value:
    | "all"
    | "livingRoom"
    | "bedroom"
    | "kitchen"
    | "bathroom"
    | "dinning"
    | "outdoor";
}

interface PriceFilter {
  label: string;
  value:
    | "all"
    | "0-99.99"
    | "100-199.99"
    | "200-299.99"
    | "300-399.99"
    | "400+";
}

const categorieFilters: CategoryFilter[] = [
  { label: "All Rooms", value: "all" },
  { label: "Living Room", value: "livingRoom" },
  { label: "Bedroom", value: "bedroom" },
  { label: "Kitchen", value: "kitchen" },
  { label: "Bathroom", value: "bathroom" },
  { label: "Dinning", value: "dinning" },
  { label: "Outdoor", value: "outdoor" },
];

type PriceValue = PriceFilter["value"];

const priceFilters: PriceFilter[] = [
  { label: "All Price", value: "all" },
  { label: "$0.00 - 99.99", value: "0-99.99" },
  { label: "$100.00 - 199.99", value: "100-199.99" },
  { label: "$200.00 - 299.99", value: "200-299.99" },
  { label: "$300.00 - 399.99", value: "300-399.99" },
  { label: "$400.00+", value: "400+" },
];

export default function Sidebar() {
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterPrice, setFilterPrice] = useState<PriceValue[]>(["all"]);

  const toggle = (value: PriceValue) => {
    setFilterPrice((prev) => {
      const set = new Set(prev);

      if (value === "all") {
        // Selecting "all" clears others
        return ["all"];
      }

      // If any specific is chosen, remove "all"
      set.delete("all");

      if (set.has(value)) set.delete(value);
      else set.add(value);

      // If nothing left, default back to "all"
      return set.size
        ? (Array.from(set) as PriceValue[])
        : (["all"] as PriceValue[]);
    });
  };

  return (
    <aside className=" h-full w-[300px] flex flex-col gap-4">
      <div className="flex gap-2">
        <Image src={filterLogo} alt="filter" />
        <h1 className=" font-bold"> Filter</h1>
      </div>

      <div className="mb-5">
        <h1 className="uppercase mb-2 font-bold"> Categories</h1>
        <div className="flex flex-col gap-2 h-40 overflow-y-auto">
          {categorieFilters.map((category, index) => {
            return (
              <div
                key={index}
                className={`${
                  filterCategory == category.value ? "underline" : "opacity-60"
                } cursor-pointer  font-bold `}
                onClick={(event) => {
                  event.preventDefault();
                  setFilterCategory(category.value);
                }}
              >
                {category.label}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="uppercase mb-2 font-bold"> price</h1>
        <div className="flex flex-col gap-2">
          {priceFilters.map((price, index) => {
            const checked =
              price.value === "all"
                ? filterPrice.length === 1 && filterPrice[0] === "all"
                : filterPrice.includes(price.value);

            const id = `price-${price.value}`;
            return (
              <div className="flex w-full justify-between" key={index}>
                <label
                  htmlFor={id}
                  className="flex-1 cursor-pointer  font-bold opacity-60"
                >
                  {price.label}
                </label>
                <input
                  id={id}
                  type="checkbox"
                  className="h-5 w-5 accent-black"
                  checked={checked}
                  onChange={() => toggle(price.value)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
