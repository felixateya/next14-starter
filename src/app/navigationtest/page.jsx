"use client";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import React from "react";

const NavigationTestPage = () => {
    // CLIENT SIDE NAVIGATION
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const q = searchParams.get('q')
  console.log(q)
  const handleClick = () => {
    console.log("clicked");
    router.forward("/");
  };
  return (
    <div>
      <Link href="/" prefetch={false}>
        Clik here
      </Link>
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  );
};

export default NavigationTestPage;
