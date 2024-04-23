import { titleFont } from "@/config/font";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex mb-10 w-full justify-center text-sm">
      <Link href={"/"}>
        <span className={`${titleFont.className} antialiased font-bold`}>
          Teslo|Shop
        </span>

        <span> ©{new Date().getFullYear()}</span>
      </Link>
    </div>
  );
};
