"use client";

import React from "react";
import Link from "next/link";
import { titleFont } from "@/config/font";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { useUiStore } from "@/store/ui/ui-store";

const TopMenu = () => {
  const openMenu = useUiStore((store) => store.openSideMenu);

  return (
    <nav className=" flex px-5 justify-between items-center w-full">
      {/* Logo y texto de logo */}
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Teslo
          </span>
          <span>| Shop</span>
        </Link>
      </div>

      {/* Opciones del Menu */}
      <div className=" hidden sm:block">
        <Link
          className=" m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/men"
        >
          Hombres
        </Link>
        <Link
          className=" m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/women"
        >
          Mujeres
        </Link>
        <Link
          className=" m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/kid"
        >
          Niños
        </Link>
      </div>

      {/* Search, Card, Menu */}
      <div className="flex items-center">
        <Link href="/search" className=" p-2">
          <IoSearchOutline className=" w-5 h-5" />
        </Link>
        <Link href="/cart" className=" p-2">
          <div className=" relative">
            <span className="absolute text-xs rounded-full px-1 font-bold -right-2 -top-2 bg-red-700 text-white">
              3
            </span>
            <IoCartOutline className=" w-5 h-5" />
          </div>
        </Link>
        <button
          className=" m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          onClick={() => openMenu()}
        >
          Menu
        </button>
      </div>
    </nav>
  );
};

export default TopMenu;
