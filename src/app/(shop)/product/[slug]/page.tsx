import {
  ProductMobileSlidesShow,
  ProductSlidesShow,
  QuantitySelector,
  SizeSelector,
} from "@/components";
import { titleFont } from "@/config/font";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default function ({ params }: Props) {
  const { slug } = params;
  const product = initialData.products.find((product) => product.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className=" mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* Slideshow */}
      <div className=" col-span-1 md:col-span-2">
        {/* Desktop SlideShow */}
        <ProductSlidesShow
          images={product.images}
          title={product.title}
          className=" hidden md:block"
        />
        {/* Mobile SlideShow */}
        <ProductMobileSlidesShow
          images={product.images}
          title={product.title}
          className=" block md:hidden"
        />
      </div>

      {/* Product Information */}
      <div className=" col-span-1 px-5">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className=" text-lg mb-5">$ {product.price}</p>
        {/* selector de tallas */}
        <SizeSelector
          selecSize={product.sizes[0]}
          availableSize={product.sizes}
        />
        {/* selector de cantidad */}
        <QuantitySelector quantity={1} />
        {/* button */}
        <button className=" btn-primary my-5">Agregar al Carrito</button>
        {/* Description */}
        <h3 className=" font-bold text-sm">Descripción</h3>
        <p className=" font-light">{product.description}</p>
      </div>
    </div>
  );
}
