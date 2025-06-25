"use client";

import { usePathname } from "next/navigation";

import Navbar from "./navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();

  return <Navbar currentPath={pathname} />;
}
