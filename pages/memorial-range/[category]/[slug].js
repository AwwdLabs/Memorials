import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { MemorialProducts } from "@/products/Products";

import Footer from "@/components/footer/Footer";

export default function ProductPage() {
  const router = useRouter();
  const { category, slug } = router.query;

  const product = MemorialProducts.find(
    (product) => product.category === category && product.slug === slug
  );

  return (
    <>
      <div className="lg:w-[90%] lg:mx-auto flex items-center  flex-col min-h-screen">
      {" "}
      <h1 className="mt-20 mb-10 text-4xl text-center lg:text-5xl text-zinc-600">
        {product.title}
      </h1>
      <Image
        src={product.image}
        alt={product.title}
        width={400}
        height={300}
        className=""
      />
      <span>{product.color}</span>
      <p className="text-xl">{product.description}</p>
      {/* Add product details here */}
    </div>
    <Footer />
    </>
  );
}
