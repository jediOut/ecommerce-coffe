import ProductImageMiniature from "@/components/shared/product-image-miniature";

import ProductTasteOrigin from "@/components/shared/product-taste-origin";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { format } from "path";

interface CartItemPros {
  product: ProductType;
}

const CartItem = (props: CartItemPros) => {
  const { product } = props;
  const router = useRouter();
  const { removeItem } = useCart();

  return (
    <li className="flex py-6 border-b">
      <ProductImageMiniature slug={product.slug} url={product.images[0].url} />
      <div className="flex justify-between flex-1 px-6">
        <div>
          <h3 className="text-lg font-bold">{product.productName}</h3>
          <p className="font-bold">{formatPrice(product.price)}</p>
          <ProductTasteOrigin origin={product.origin} taste={product.taste} />
        </div>
        <div>
          <button
            className={cn(
              "rounded-full flex items-center justify-center bg-red-700 border shadow-md p-1 hover:scale-110 transition w-fit"
            )}
          >
            <X
              size={20}
              className=""
              color="white"
              onClick={() => removeItem(product.id)}
            />
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
