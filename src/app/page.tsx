import Sidebar from "@/components/sidebar";
import Image from "next/image";
import bannerImg from "../assets/images/background.png";
import ListOfProducts from "@/components/listOfProducts";
import { loadProducts } from "@/routes";

type PageProps = {
  filterParams: { filterCategory: string | null; filterPrice: string | null };
};

export default async function Home() {
  const products = await loadProducts();

  return (
    <main className="flex flex-col h-full w-full items-center">
      <div className="w-full h-[700px] mb-10 flex justify-center relative ">
        <Image src={bannerImg.src} fill alt="banner" priority />
        <div className="z-10 flex flex-col items-center justify-center gap-10 ">
          <div className="text-xl flex gap-5">
            <span>Home {">"}</span> <span className="font-bold">Shop</span>
          </div>
          <div className=" text-7xl font-bold ">Shop Page</div>
          <div className="text-2xl f">
            Let&apos;s design the place you always imagined
          </div>
        </div>
      </div>

      <div className="flex h-full w-full gap-10 ">
        <Sidebar />
        <ListOfProducts products={products} />
      </div>
    </main>
  );
}
