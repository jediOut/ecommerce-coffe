import ProductImageMiniature from "@/components/shared/product-image-miniature";
import ProductTasteOrigin from "@/components/shared/product-taste-origin";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { ShoppingCart, X } from "lucide-react";


interface LovedItemProductsProps {
  product: ProductType;
}
const LovedItemProducts = (props: LovedItemProductsProps) => {
  const { product } = props;
  const { removeLovedItem } = useLovedProducts();
  const { addItem } = useCart();

  const addToCheckout = () => {
    addItem(product);
    removeLovedItem(product.id);
  };
  return (
    <li className="flex py-6 border-b">
      <ProductImageMiniature slug={product.slug} url={product.images[0].url} />
      <div className="flex justify-between flex-1 px-6">
        <div>
          <h2 className="text-lg font-bold">{product.productName}</h2>
          <p className="font-bold">{formatPrice(product.price)}</p>
          <ProductTasteOrigin origin={product.origin} taste={product.taste} />
          <Button className="mt-5 rounded-full" onClick={addToCheckout}>
            Añadir al carrito
            <ShoppingCart size={4} />
          </Button>
        </div>
      </div>
      <div>
        <button
          className={cn(
            "rounded-full flex items-center justify-center bg-red-700 shadow-md p-1 hover:scale-110 transition"
          )}
        >
          <X
            size={20}
            color="white"
            onClick={() => removeLovedItem(product.id)}
          />
        </button>
      </div>
    </li>
  );
};

export default LovedItemProducts;
