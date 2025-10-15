"use client";

import { useCart } from "@/app/hooks/useGetCart";
import { Product } from "@/app/types/product";
import { useState } from "react";

type Props = { product: Product };

export default function CartActions({ product }: Props) {
  const { addOrModify: add } = useCart();
  const [productCount, setProductCount] = useState<number>(1);

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex w-full gap-5">
        <div className="flex items-center gap-4 rounded-md bg-black/10 ">
          <button
            className="p-2 px-4 cursor-pointer disabled:text-black/25 text-black/90 font-bold"
            onClick={() => {
              setProductCount((prev) => prev - 1);
            }}
            disabled={productCount == 1}
          >
            -
          </button>
          <div className="font-bold">{productCount}</div>
          <button
            className="p-2 px-4  cursor-pointer font-bold text-black/90 "
            onClick={() => {
              setProductCount((prev) => prev + 1);
            }}
          >
            +
          </button>
        </div>
        <button className="border rounded-md border-black w-full font-bold py-2 cursor-pointer">
          Wishlist
        </button>
      </div>

      <button
        onClick={() => add({ product: product }, productCount)}
        className="border rounded-md bg-black text-white font-bold py-2 cursor-pointer"
      >
        Add to Cart
      </button>
    </div>
  );
}
