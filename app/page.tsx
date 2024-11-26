"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button"
import CarouselTextBanner from "@/components/carouser-text-banner";
import FeaturedProducts from "@/components/featured-products";
import BannerDiscount from "@/components/banner-discount";
import ChooseCategory from "@/components/choose-category";
import BannerProduct from "@/components/banner-product";

export default function Home() {
  return (
  <main>
   <CarouselTextBanner/>
   <FeaturedProducts/>
   <BannerDiscount/>
   <ChooseCategory/>
   <BannerProduct/>
  </main>
  );
}
