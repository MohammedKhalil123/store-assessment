"use client";

import { useCart } from "@/app/hooks/useGetCart";
import Image from "next/image";

export default function CartTable() {
  const { items, addOrModify, remove } = useCart();

  if (items.length == 0) {
    return (
      <div className="w-full h-[300px] flex items-center justify-center">
        <div>Please add elements to the cart</div>
      </div>
    );
  }

  return (
    <table className="w-full table-fixed">
      <thead className="border-b-2 border-b-black/30 text-left pb-2 h-2 ">
        <tr className="">
          <th className="pb-4">Product</th>
          <th className="pb-4 w-[15%]">Quantity</th>
          <th className="pb-4 w-[10%]"> Price</th>
          <th className="pb-4 w-[8%]">Subtotal</th>
        </tr>
      </thead>
      <tbody className="text-left">
        {items.map((item) => {
          return (
            <tr key={item.product.id}>
              <th className="py-4 ">
                <div className="flex gap-3 w-full h-full">
                  <div className="relative">
                    <Image
                      src={item.product.image}
                      alt="product image"
                      height={50}
                      width={100}
                      priority
                    />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-4">
                    <div>{item.product.title}</div>
                    <button
                      className=" hover:text-red-700 cursor-pointer w-fit text-black/50"
                      onClick={() => remove(item.product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </th>
              <th className="pb-4 ">
                <div className="flex items-center gap-4 rounded-md bg-black/10 w-fit ">
                  <button
                    className="p-2 px-4 cursor-pointer disabled:text-black/25 text-black/90 font-bold"
                    onClick={() => addOrModify({ product: item.product }, -1)}
                  >
                    -
                  </button>
                  <div className="font-bold">{item.quantity}</div>
                  <button
                    className="p-2 px-4  cursor-pointer font-bold text-black/90 "
                    onClick={() => addOrModify({ product: item.product }, 1)}
                  >
                    +
                  </button>
                </div>
              </th>
              <th className="pb-4 "> ${item.product.price}</th>
              <th className="pb-4 w-[8%]">
                ${item.product.price * item.quantity}
              </th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
