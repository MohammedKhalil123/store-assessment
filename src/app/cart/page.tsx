import CartTable from "@/components/cart/cartTable";
import Coupon from "@/components/cart/couponComponent";
import TotalComponent from "@/components/cart/totalComponent";

export default function CartPage() {
  return (
    <main className="w-full flex flex-col py-3 items-center gap-14">
      <div className="text-7xl font-bold">Cart</div>
      <div className="flex gap-4">
        <div className="flex gap-5 border-b-2 border-b-black  pb-4 items-center w-[200px]">
          <div className="text-white bg-black rounded-3xl py-1 px-3">1</div>
          <div>Shopping cart</div>
        </div>
        <div className="flex gap-5  pb-4 items-center opacity-50 w-[200px]">
          <div className="text-white bg-black rounded-3xl py-1 px-3">2</div>
          <div>Shopping cart</div>
        </div>
        <div className="flex gap-5  pb-4 items-center opacity-50 w-[200px]">
          <div className="text-white bg-black rounded-3xl py-1 px-3">3</div>
          <div>Order Complete</div>
        </div>
      </div>
      <div className="flex items-start gap-4 w-full">
        <CartTable />

        <div className="border rounded-sm w-[30%] py-2 px-4 gap-2 flex flex-col">
          <div className="text-lg font-bold">Cart summary</div>
          <div className="flex justify-between bg-[#F3F5F7] p-2 border rounded-sm">
            <div className="flex gap-4">
              <input type="radio" className="accent-black" checked readOnly />
              <label>Free Shipping</label>
            </div>
            <div>$0.00</div>
          </div>
          <div className="flex justify-between p-2 border rounded-sm">
            <div className="flex gap-4">
              <input
                type="radio"
                className="accent-black"
                checked={false}
                readOnly
              />
              <label>Express Shipping</label>
            </div>
            <div>+$15.00</div>
          </div>
          <div className="flex justify-between  p-2 border rounded-sm">
            <div className="flex gap-4">
              <input
                type="radio"
                className="accent-black"
                checked={false}
                readOnly
              />
              <label>Pick Up</label>
            </div>
            <div>%21.00</div>
          </div>
          <TotalComponent />
          <button className="border rounded-md bg-black text-white font-bold py-2 cursor-pointer mt-4">
            Checkout
          </button>
        </div>
      </div>
      <Coupon />
    </main>
  );
}
