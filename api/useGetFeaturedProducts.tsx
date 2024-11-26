import { useEffect, useState } from "react";

export function useGetFeaturedProducts() {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[isFeatured][$eq]=true&populate=*`;
  const [result, setResult] = useState<any>(null); // Usar `any` o un tipo adecuado basado en la estructura de los datos
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); 
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const json = await res.json();
        setResult(json.data); 
        setLoading(false);
      } catch (error: any) {
        console.error("Error fetching featured products:", error);
        setError(error.message); 
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { loading, result, error };
}
