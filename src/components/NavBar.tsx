import Link from "next/link";
import React from "react";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <div className="flex p-4 bg-orange-600 space-x-2 justify-end text-white">
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
    </div>
  );
};
