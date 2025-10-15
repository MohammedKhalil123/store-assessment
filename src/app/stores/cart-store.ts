"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Product } from "../types/product";

export type CartItem = {
  product: Product;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  count: number;
  subtotal: number;
  addOrModify: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  remove: (id: number) => void;
  clear: () => void;

  // hydration flag to avoid SSR mismatch flashes
  _hasHydrated: boolean;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      count: 0,
      subtotal: 0,
      _hasHydrated: false,

      addOrModify: (item, newQuantity = 1) =>
        set((state) => {
          const existing = state.items.find(
            (i) => i.product.id === item.product.id
          );

          let items: CartItem[] = [];

          if (existing) {
            // if quantity reaches 0
            if (existing.quantity + newQuantity <= 0) {
              items = state.items.filter(
                (i) => i.product.id !== item.product.id
              );
            } else {
              items = state.items.map((i) =>
                i.product.id === item.product.id
                  ? { ...i, quantity: i.quantity + newQuantity }
                  : i
              );
            }
          } else {
            items = [...state.items, { ...item, quantity: newQuantity }];
          }

          const count = items.reduce((n, i) => n + i.quantity, 0);
          const subtotal = items.reduce(
            (n, i) => n + i.product.price * i.quantity,
            0
          );

          return { items, count, subtotal };
        }),

      remove: (id) =>
        set((state) => {
          const items = state.items.filter((i) => i.product.id !== id);
          const count = items.reduce((n, i) => n + i.quantity, 0);
          const subtotal = items.reduce(
            (n, i) => n + i.product.price * i.quantity,
            0
          );
          return { items, count, subtotal };
        }),

      clear: () => set({ items: [], count: 0, subtotal: 0 }),
    }),
    {
      name: "cart-v1", // localStorage key
      storage: createJSONStorage(() => localStorage),
      // Only persist what's needed
      partialize: (state) => ({ items: state.items }),

      // keep derived fields in sync after rehydrate
      onRehydrateStorage: () => (state) => {
        // runs after state is rehydrated from storage
        if (!state) return;
        const items = state.items ?? [];
        const count = items.reduce((n, i) => n + i.quantity, 0);
        const subtotal = items.reduce(
          (n, i) => n + i.product.price * i.quantity,
          0
        );
        state.count = count;
        state.subtotal = subtotal;
        state._hasHydrated = true;
      },
    }
  )
);
