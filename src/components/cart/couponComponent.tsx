import Image from "next/image";
import couponLogo from "../../assets/icons/coupon.svg";

export default function Coupon() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="text-xl font-bold">Have a coupon?</div>
      <div>Add your code for an instant cart discount</div>
      <div className="flex w-[400px] border px-3 py-2 gap-2">
        <Image src={couponLogo} alt="cart" />
        <input type="text" placeholder="Coupon Code" className="w-full ml-4" />
        <button className="cursor-pointer" disabled>
          {" "}
          Apply
        </button>
      </div>
    </div>
  );
}
