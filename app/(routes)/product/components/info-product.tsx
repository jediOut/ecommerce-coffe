import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/product";
import { Heart } from "lucide-react";

export type InfoProductProps = {
  product: ProductType;
};
const InfoProduct = (props: InfoProductProps) => {
  const { product } = props;
  const { addItem } = useCart();
  const { addLoveItem, lovedItems, removeLovedItem } = useLovedProducts();
  const isLoved = lovedItems.some((item) => item.id === product.id);
  const toggleLovedItem = () => {
    if (isLoved) {
      removeLovedItem(product.id);
    } else {
      addLoveItem(product);
    }
  };
  return (
    <div className="p-6">
      <div className="justify-between mb-3 sm:flex">
        <h2 className="text-2xl">{product.productName}</h2>
        <div className="flex items-center justify-between gap-3">
          <p
            className="px-2 py-1 text-xs text-white bg-black rounded-full
            dark:bg-white dark:text-black w-fit"
          >
            {product.taste}
          </p>
          <p
            className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full
            w-fit"
          >
            {product.origin}
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      <p className="text-pretty text-justify">{product.description}</p>
      <Separator className="my-4" />
      <p className="my-4 text-2xl">{formatPrice(product.price)}</p>
      <div className="flex items-center gap-5">
        <Button className="w-full" onClick={() => addItem(product)}>
          Comprar
        </Button>
        <Heart
          width={30}
          strokeWidth={1}
          className={`transition duration-300 cursor-pointer ${
            isLoved ? "fill-black" : "hover:fill-black"
          }`}
          onClick={() => toggleLovedItem()}
        />
      </div>
    </div>
  );
};

export default InfoProduct;
