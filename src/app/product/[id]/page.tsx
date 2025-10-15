import { Product } from "@/app/types/product";
import CartActions from "@/components/productDetails/cartActionButtons";
import { loadProduct } from "@/routes";
import { NoSsr, Rating } from "@mui/material";
import Image from "next/image";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const product: Product | null = await loadProduct(Number(id));

  if (product === null) {
    return (
      <div className="flex h-dvh w-full justify-center items-center">
        <div className="text-3xl font-bold">Product Not Found</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full ">
      <div></div>
      <div className="flex w-full gap-20">
        <div className="relative w-full aspect-[3/3]">
          <Image src={product.image} alt="product image" fill priority />
        </div>
        <div className="flex flex-col w-full gap-4">
          <div className="flex items-center gap-2 mb-1">
            <NoSsr>
              <Rating
                name={`product-rating-${product.id}`}
                defaultValue={product.rating.rate}
                precision={0.1}
                readOnly
                sx={{
                  color: "black",
                }}
              />
            </NoSsr>

            <div> {product.rating.count} Reviews</div>
          </div>
          <div className="font-bold text-5xl mb-4">{product.title}</div>
          <div className=" text-xl ">{product.description}</div>
          <div className="font-bold text-3xl">${product.price}</div>
          <CartActions product={product} />
        </div>
      </div>
    </div>
  );
}
