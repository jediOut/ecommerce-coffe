"use client";
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";

export const dataCarouselTop = [
  {
    id: 1,
    title: "Envío en 24/48 h",
    description:
      "Como cliente VIP tus envios en 24/48 horas. Obtén más información y unete.",
    link: "#!",
  },
  {
    id: 2,
    title: "Descuentos por compras mayores a $500",
    description:
      "Aprovecha un 10% de descuento en tus compras superiores a $500. ¡Descubre más ahora!",
    link: "#!",
  },
  {
    id: 3,
    title: "Devoluciones gratuitas",
    description:
      "Compra sin preocupaciones. Tienes devoluciones gratuitas en un plazo de 30 días.",
    link: "#!",
  },
  {
    id: 4,
    title: "15% de descuento en novedades",
    description:
      "Explora nuestras novedades y llévatelas con un 15% de descuento. ¡No te lo pierdas!",
    link: "#!",
  },
];
const CarouselTextBanner = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-200 dark:bg-primary">
      <Carousel
        className="w-full max-w-4xl mx-auto"
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
      >
        <CarouselContent>
          {dataCarouselTop.map(({ id, title, link, description }) => (
            <CarouselItem
              key={id}
              onClick={() => router.push(link)}
              className="cursor-pointer"
            >
              <div>
                <Card className="shadow-none border-none bg-transparent ">
                  <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                    <h2 className="sm:text-lg text-wrap dark:text-secondary">
                      {title}
                    </h2>
                    <p className="text-xs sm:text-sm text-wrap dark:text-secondary">
                      {description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselTextBanner;
