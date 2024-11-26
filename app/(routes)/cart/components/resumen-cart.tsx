import { ProductType } from "@/types/product";

interface ResumenCartProps {
  product: ProductType;
}
const ResumenCart = (props: ResumenCartProps) => {
  const { product } = props;
  return (
    <div className="grid grid-cols-[2fr_1fr] gap-4 items-center">
    <p className="text-left">{product.productName}</p>
    <p className="text-right">{product.price}</p>
  </div>
  
  );
};

export default ResumenCart;
