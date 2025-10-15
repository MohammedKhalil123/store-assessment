import { NoSsr, Rating } from "@mui/material";
import Image from "next/image";
import layoutLogo from "../assets/icons/layout1.svg";
import layout2Logo from "../assets/icons/layout2.svg";
import layout3Logo from "../assets/icons/layout3.svg";
import layout4Logo from "../assets/icons/layout4.svg";

import Link from "next/link";
import { Product } from "@/app/types/product";

export default function ListOfProducts({
  products = [],
}: {
  products: Product[];
}) {
  return (
    <section className="flex flex-col h-full  w-full items-center mb-3 gap-2">
      <div className="flex w-full justify-between mb-4">
        <div className="font-bold">Living Room</div>
        <div className="flex ">
          <div className="bg-black/20 flex  border border-black/20 py-1.5 px-2 cursor-pointer">
            <Image src={layout4Logo} alt="filter" />
          </div>
          <div className=" flex  border border-black/20 py-1.5 px-2 cursor-pointer">
            <Image src={layoutLogo} alt="filter" />
          </div>
          <div className=" flex  border border-black/20 py-1.5 px-2  cursor-pointer">
            <Image src={layout2Logo} alt="filter" />
          </div>
          <div className=" flex  border border-black/20 py-1.5 px-2  cursor-pointer">
            <Image src={layout3Logo} alt="filter" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {products.map((product: Product) => {
          return (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className="flex flex-col relative gap-2"
            >
              <div className="relative w-full aspect-[3/3]">
                <Image src={product.image} alt="product image" fill priority />
              </div>
              <NoSsr>
                {" "}
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

              <div className="font-bold">{product.title}</div>
              <div className="font-bold">${product.price}</div>
            </Link>
          );
        })}
      </div>
      <button className="border rounded-2xl w-fit py-2 px-10">Show More</button>
    </section>
  );
}
