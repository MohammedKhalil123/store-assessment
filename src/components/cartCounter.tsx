"use client";

import { useCart } from "@/app/hooks/useGetCart";

export default function CartCounter() {
  const { count, hydrated } = useCart();

  // avoid SSR mismatch: render placeholder until hydrated
  if (!hydrated) return <span className="w-6 h-6 inline-block" />;

  if (count <= 0) {
    return <div></div>;
  }

  return (
    <div className="px-2  rounded-4xl bg-black text-white text-[14px]">
      {count}
    </div>
  );
}
