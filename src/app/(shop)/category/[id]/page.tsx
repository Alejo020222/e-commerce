import { ProductGrid, Title } from "@/components";
import { Category } from "@/interface";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: Category;
  };
}

const seeProduct = initialData.products;

export default function ({ params }: Props) {
  const { id } = params;
  const products = seeProduct.filter((product) => product.gender === id);

  // if (id == "kids") {
  //   notFound();
  // }

  const label: Record<Category, string> = {
    men: "para hombre",
    women: "para mujeres",
    kid: "para niños",
    unisex: "para todos",
  };

  return (
    <div>
      <Title
        title={`Artículos ${label[id]}`}
        subtitle="Todos los productos"
        className=" mb-2"
      />
      <ProductGrid products={products} />
    </div>
  );
}
