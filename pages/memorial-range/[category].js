import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { MemorialProducts } from "@/products/Products";

import Footer from "@/components/footer/Footer";

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;

  const categoryProducts = MemorialProducts.filter(
    (product) => product.category === category
  );

  return (
    <>
    <div className="lg:w-[90%] lg:mx-auto min-h-screen">
      <h1 className="mt-20 text-4xl text-center lg:text-5xl text-zinc-600">
        {} Memorials
      </h1>
      <Image
        src="/floral-underflow-slate.png"
        alt="About Us"
        width={400}
        height={500}
        className="w-[350px] h-[50px] mx-auto text-center"
      />

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categoryProducts.map((product) => (
          <Link
            href={`/memorial-range/${category}/${product.slug}`}
            legacyBehavior
            key={product.id}
            className="pointer"
          >
            <li className="flex flex-col items-center justify-center">
              <Image
                src={product.image}
                alt={product.title}
                width={320}
                height={300}
                className="mb-5 border"
              />

              <div></div>
              <p className="px-8 text-xl">{product.description}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
    <Footer />
    </>
  );
}
