import { Size } from "@/interface";
import clsx from "clsx";

interface Props {
  selecSize: Size;
  availableSize: Size[];
}

export const SizeSelector = ({ selecSize, availableSize }: Props) => {
  return (
    <div className=" my-5">
      <h3 className=" font-bold mb-4">Tallas Disponibles</h3>
      <div className="flex">
        {availableSize.map((size) => (
          <button
            key={size}
            className={clsx(" mx-2 hover:underline text-lg", {
              underline: size === selecSize,
            })}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
