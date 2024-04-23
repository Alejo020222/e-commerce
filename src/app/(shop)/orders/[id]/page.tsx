import clsx from "clsx";
import Image from "next/image";
import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import { IoCardOutline } from "react-icons/io5";

interface Props {
  params: {
    id: string;
  };
}

export default function ({ params }: Props) {
  const { id } = params;

  const products = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
  ];

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title={`Orden #${id}`} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <div
              className={clsx(
                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                { "bg-red-500": false, "bg-green-700": true }
              )}
            >
              <IoCardOutline size={30} />
              <span className=" mx-2 text-sm">Pendiente de pago</span>
              <span className=" mx-2 text-sm">Orden pagada</span>
            </div>
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
                  <p>${product.price * 3}</p>
                  <p className=" font-bold">Subtotal:{product.price * 5}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Checkout Resumen de orden*/}
          <div className=" bg-white rounded-xl shadow-xl p-7">
            <h2 className=" text-2xl mb-2">Dirección de entrega</h2>
            <div className=" mb-10">
              <p className=" text-xl">Ramon Martinez</p>
              <p>Av. Simepre Viva 434</p>
              <p>Col. Centro</p>
              <p>Alcaldia Cuahutémoc</p>
              <p>Ciudad de Mexico</p>
              <p>CP.684318</p>
              <p>(654) 648 68463</p>
            </div>
            {/* Divader */}
            <div className=" w-full h-0.5 rounded bg-gray-200 mb-10"></div>

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
              <div
                className={clsx(
                  "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                  { "bg-red-500": false, "bg-green-700": true }
                )}
              >
                <IoCardOutline size={30} />
                <span className=" mx-2 text-sm">Pendiente de pago</span>
                <span className=" mx-2 text-sm">Orden pagada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
