import Link from "next/link";
import React from "react";
import { IoCartOutline } from "react-icons/io5";

export default function () {
  return (
    <div className="flex justify-center items-center h-[400px]">
      <IoCartOutline size={80} className="mx-5" />
      <div className="flex flex-col items-center">
        <h1 className=" text-xl font-semibold">Tu carrito está vacío</h1>
        <Link href={"/"} className=" mt-2 text-4xl text-blue-500">
          Regresar
        </Link>
      </div>
    </div>
  );
}
