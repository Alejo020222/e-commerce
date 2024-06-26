import Link from "next/link";
import { redirect } from "next/navigation";
import { initialData } from "@/seed/seed";
import { QuantitySelector, Title } from "@/components";
import Image from "next/image";
import { IoTrashOutline } from "react-icons/io5";

export default function () {
  const products = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
  ];

  // redirect("/empty");

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Carrito" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className=" text-xl">Agregar más items</span>
            <Link href="/">Contiúa comprando</Link>
            {/* Items */}
            {products.map((product) => (
              <div key={product.slug} className="flex my-5">
                <Image
                  src={`/products/${product.images[0]}`}
                  width={100}
                  height={100}
                  alt={product.title}
                  className=" mr-5 rounded"
                />
                <div>
                  <p>{product.title}</p>
                  <p>${product.price}</p>
                  <QuantitySelector quantity={3} />
                  <div className="flex mt-3">
                    <IoTrashOutline className=" m-2" />
                    <button className="underline">Remover</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Checkout Resumen de orden*/}
          <div className=" bg-white rounded-xl shadow-xl p-7 h-fit">
            <h2 className=" text-2xl mb-2">Resumen de orden</h2>
            <div className=" grid grid-cols-2">
              <span className="">No. Productos</span>
              <span className="text-right">3 Artículos</span>

              <span className="">Sub-Total</span>
              <span className="text-right">$100</span>

              <span className="">Impuestos (15%)</span>
              <span className="text-right">$100</span>

              <span className="text-2xl mt-5">Total</span>
              <span className="text-2xl mt-5 text-right">$100</span>
            </div>
            <div className=" mt-5 mb-5 w-full">
              <Link
                href="/checkout/address"
                className=" flex btn-primary justify-center"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
