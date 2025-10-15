"use client";

import { useCart } from "@/app/hooks/useGetCart";

export default function TotalComponent() {
  const { subtotal } = useCart();

  return (
    <div className="my-2 flex flex-col w-full gap-4">
      <div className="flex justify-between py-3 border-b border-b-black/10">
        <div className="text-[14px]">Subtotal</div>
        <div>${subtotal}</div>
      </div>
      <div className="flex justify-between">
        <div className="text-lg font-bold">Total</div>
        <div className="font-bold">${subtotal}</div>
      </div>
    </div>
  );
}
