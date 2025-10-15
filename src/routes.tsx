import { Product } from "./app/types/product";

export async function loadProducts(): Promise<Product[]> {
  try {
    const res: Response = await fetch("https://fakestoreapi.com/products");
    if (res.status != 200) return [];
    const products = (await res.json()) as Product[];
    return products;
  } catch (e) {
    handleApiError(e);
    return [];
  }
}

export async function loadProduct(id: number): Promise<Product | null> {
  try {
    const res: Response = await fetch(
      `https://fakestoreapi.com/productss/${id}`
    );
    if (res.status != 200) return null;
    const product = await res.json();
    return product;
  } catch (e) {
    handleApiError(e);
    return null;
  }
}

function handleApiError(error: unknown) {
  console.error("API Error:", error);

  return new Response(
    JSON.stringify({
      success: false,
      message: error instanceof Error ? error.message : "Unknown server error",
    }),
    {
      status: 500,
      headers: { "Content-Type": "application/json" },
    }
  );
}
