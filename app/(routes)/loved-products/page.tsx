"use client"
import { useLovedProducts } from "@/hooks/use-loved-products";
import LovedItemProducts from "./components/loved-item-products";

export default function Page() {
  const { lovedItems } = useLovedProducts();
  return (
    
    <div className="max-w-4xl px-4 py-4 mx-auto sm:py-32 sm:px-24">
      <h2 className="text-2xl mb-5 font-bold">Productos que te gustan</h2>
      <div>
        <div>{lovedItems.length == 0 &&(
          <p>No hay productos en la sección de me gusta</p>
        )}
        <ul>
          {lovedItems.map((item)=>(
            <LovedItemProducts key={item.id} product={item}/>
          ))}
        </ul>
        </div>
      </div>
    </div>
  );
}
// return (
//   <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
//     <h2 className="mb-5 text-3xl font-bold">Productos que te gustan</h2>
//     <div className="grid sm:grid-cols-2 sm:gap-5">
//       <div>
//         <div>
//           {lovedItems.length == 0 && (
//             <p>No hay productos en la sección de me gusta</p>
//           )}
//           <ul>
//             {lovedItems.map((item) => (
//               <LovedItemProducts key={item.id} product={item} />
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   </div>
// );