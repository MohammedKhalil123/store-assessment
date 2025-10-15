import Image from "next/image";
import NavLink from "./nav-link";
import searchLogo from "../assets/icons/search 02.svg";
import userLogo from "../assets/icons/user-circle.svg";
import cartLogo from "../assets/icons/shopping bag.svg";
import Link from "next/link";
import CartCounter from "./cartCounter";

export default function Header() {
  return (
    <header className="flex h-full w-full items-center justify-between p-4">
      <h1 className="text-2xl font-bold"> 3legant.</h1>
      <div className="flex gap-10">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/shop">Shop</NavLink>
        <NavLink href="/product">Product</NavLink>
        <NavLink href="/contact-us">Contact Us</NavLink>
      </div>
      <div className="flex gap-4">
        <Link href="/search">
          <Image src={searchLogo} alt="search" />
        </Link>
        <Link href="/profile">
          <Image src={userLogo} alt="profile" />
        </Link>
        <Link href="/cart" className="flex items-center gap-2">
          <Image src={cartLogo} alt="cart" />
          <CartCounter />
        </Link>
      </div>
    </header>
  );
}
