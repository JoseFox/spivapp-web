import Link from "next/link";
import React from "react";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{}, logout] = useLogoutMutation();
  const [{ data, fetching }] = useMeQuery();
  let body = null;

  if (fetching) {
    body = null;
  } else if (!data?.me) {
    body = (
      <>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </>
    );
  } else {
    body = (
      <div className="flex space-x-2">
        <div>{data.me.username}</div>
        <button onClick={() => logout()} className="hover:underline">
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="flex p-4 bg-orange-600 space-x-2 justify-end text-white">
      {body}
    </div>
  );
};
