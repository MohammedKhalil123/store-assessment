"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname: string = usePathname();

  return (
    <Link
      href={href}
      className={`${pathname === href ? "" : "opacity-50"} font-bold`}
    >
      {children}
    </Link>
  );
}
