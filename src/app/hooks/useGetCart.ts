"use client";

import { useShallow } from "zustand/react/shallow";
import { useCartStore } from "../stores/cart-store";

export function useCart() {
  const state = useCartStore(
    useShallow((s) => ({
      items: s.items,
      count: s.count,
      subtotal: s.subtotal,
      addOrModify: s.addOrModify,
      remove: s.remove,
      clear: s.clear,
      hydrated: s._hasHydrated,
    }))
  );
  return state;
}
