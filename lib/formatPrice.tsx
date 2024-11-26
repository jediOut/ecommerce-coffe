export function formatPrice(price: number): string {
    return new Intl.NumberFormat("mx-MX", {
      style: "currency",
      currency: "MXN",
    }).format(price);
  }
  